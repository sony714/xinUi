rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:sony714/xin-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://sony714.github.io/xin-ui-website/#/ 
