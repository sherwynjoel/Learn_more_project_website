const REPO = process.env.GITHUB_REPO || 'sherwynjoel/Learn_more_project_website';
const BRANCH = 'main';

function ghHeaders() {
  return {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };
}

export async function readJsonFile(filePath) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/contents/${filePath}?ref=${BRANCH}`,
      { headers: ghHeaders(), cache: 'no-store' }
    );
    if (!res.ok) return { data: [], sha: null };
    const file = await res.json();
    const content = JSON.parse(Buffer.from(file.content, 'base64').toString('utf8'));
    return { data: Array.isArray(content) ? content : [], sha: file.sha };
  } catch {
    return { data: [], sha: null };
  }
}

export async function writeJsonFile(filePath, data, sha, message) {
  const content = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: ghHeaders(),
      body: JSON.stringify({ message, content, sha, branch: BRANCH }),
    }
  );
  return res.ok;
}

export const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
