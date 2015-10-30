python validation_run.py --ud-d ~/UD --ud-t ~/UD/tools > ../_includes/validation_results.html
echo "updated: $(date -R)" > ../_data/validation.yaml
git pull && git add ../_includes/validation_results.html ../_data/validation.yaml && git commit -m "Validation auto-run" && git push
