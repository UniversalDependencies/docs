python validation_run.py --rerun $1 --ud-data ../../UD-dev-branches --ud-tools ../../tools --validation-cache ../../validation_cache.json > ../validation.md
#python validation_run.py --ud-d ~/UD_PROJHOOK/UD-dev-branches --ud-t ~/UD_PROJHOOK/tools > ../_includes/validation_results.html
#echo "updated: $(date -R)" > ../_data/validation.yaml
#git pull && git add ../_includes/validation_results.html ../_data/validation.yaml && git commit -m "Validation auto-run" && git push
