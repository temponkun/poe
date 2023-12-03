const path = require('path');

// 1. Joining paths
const path1 = '/path/to';
const path2 = 'file.txt';
const joinedPath = path.join(path1, path2);
console.log(joinedPath);

// 2. Resolving paths
const resolvedPath = path.resolve('path', 'to', 'file.txt');
console.log(resolvedPath);

// 3. Getting the file extension
const filePath = '/path/to/file.txt';
const fileExtension = path.extname(filePath);
console.log(fileExtension);

// 4. Getting the base name of a file
const fileName = path.basename(filePath);
console.log(fileName);

// 5. Getting the directory name
const directoryName = path.dirname(filePath);
console.log(directoryName);