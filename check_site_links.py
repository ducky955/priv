import os
import re
root = 'site'
errors = []
for dirpath, dirs, files in os.walk(root):
    for name in files:
        if name.endswith('.html'):
            path = os.path.join(dirpath, name)
            with open(path, 'r', encoding='utf-8') as f:
                text = f.read()
            for m in re.finditer(r'(?:href|src)=["\']([^"\']+)["\']', text):
                url = m.group(1)
                if url.startswith(('http://', 'https://', 'mailto:', '#', 'data:')):
                    continue
                if url.startswith('/'):
                    p = url[1:]
                else:
                    p = os.path.normpath(os.path.join(os.path.dirname(path), url))
                    p = os.path.relpath(p, root)
                if p.startswith('..'):
                    errors.append((path, url, 'out-of-site'))
                elif not os.path.exists(os.path.join(root, p)):
                    errors.append((path, url, p, 'missing'))
print(len(errors))
for e in errors:
    print(e)
