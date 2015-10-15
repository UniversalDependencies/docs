for L in ../../UD_*
do
    echo $L
    cd $L
    git pull 
    cd -
done
python validation_run.py --ud-d ~/UD --ud-t ~/UD/tools > ../_includes/validation_results.html
git add ../_includes/validation_results.html && git commit -m "Validation auto-run" && git push
