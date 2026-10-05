$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $taskRoot
if (Test-Path -LiteralPath '.git') { throw 'Bu klasor zaten Git ile bagli. Mevcut degisiklikleri git status ile kontrol edip normal commit/push kullan.' }
function Invoke-PortfolioGit {
  param([string[]]$GitArguments)
  & git @GitArguments
  if ($LASTEXITCODE -ne 0) { throw 'Git islemi tamamlanamadi. Yukaridaki hata mesajini kontrol et.' }
}
Invoke-PortfolioGit -GitArguments @('init','-b','main')
Invoke-PortfolioGit -GitArguments @('remote','add','origin','https://github.com/ilknrgzll/ilknrgzll.github.io.git')
Invoke-PortfolioGit -GitArguments @('fetch','origin','main')
# Only Git metadata is reset; local source files are retained.
Invoke-PortfolioGit -GitArguments @('reset','--mixed','origin/main')
Invoke-PortfolioGit -GitArguments @('branch','--set-upstream-to=origin/main','main')
Invoke-PortfolioGit -GitArguments @('add','src','public/admin','scripts','index.html','package.json','tsconfig.app.json','.github/workflows/pages.yml','.gitignore')
Invoke-PortfolioGit -GitArguments @('commit','-m','Add portfolio content panel and automatic Pages deployment')
Invoke-PortfolioGit -GitArguments @('push','origin','main')
Write-Host 'Kaynak dosyalar gonderildi. GitHub Pages Source: GitHub Actions olmali. Actions sonucunu kontrol et.'
