<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

define('ADMIN_PASS', 'LearnMore@2025');
define('DATA_DIR', __DIR__ . '/data/');

function isAuthorized() {
    $headers = function_exists('getallheaders') ? getallheaders() : [];
    $auth = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    return $auth === 'Bearer ' . ADMIN_PASS;
}

function readJson($file) {
    $path = DATA_DIR . $file;
    if (!file_exists($path)) return [];
    $data = json_decode(file_get_contents($path), true);
    return is_array($data) ? $data : [];
}

function writeJson($file, $data) {
    if (!is_dir(DATA_DIR)) mkdir(DATA_DIR, 0755, true);
    file_put_contents(DATA_DIR . $file, json_encode(array_values($data), JSON_PRETTY_PRINT));
}

$type   = $_GET['type'] ?? '';
$id     = $_GET['id'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

if (!in_array($type, ['blogs', 'projects', 'domains', 'builtinblogs'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid type']); exit;
}

$file = $type . '.json';

// Public read
if ($method === 'GET') {
    echo json_encode(readJson($file)); exit;
}

// All writes require auth
if (!isAuthorized()) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']); exit;
}

$body = json_decode(file_get_contents('php://input'), true) ?? [];

if ($method === 'POST') {
    $data = readJson($file);
    $item = array_merge(['id' => uniqid('', true), 'createdAt' => date('c')], $body);
    array_unshift($data, $item);
    writeJson($file, $data);
    http_response_code(201);
    echo json_encode($item); exit;
}

if ($method === 'PUT' && $id) {
    $data = readJson($file);
    foreach ($data as &$item) {
        if ($item['id'] === $id) { $item = array_merge($item, $body); break; }
    }
    writeJson($file, $data);
    echo json_encode(['ok' => true]); exit;
}

if ($method === 'DELETE' && $id) {
    $data = array_values(array_filter(readJson($file), fn($i) => $i['id'] !== $id));
    writeJson($file, $data);
    echo json_encode(['ok' => true]); exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
