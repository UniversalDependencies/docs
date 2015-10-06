#Where's the UD data?
UD_DATA=$HOME/UD
UD_TOOLS=$HOME/UD/tools

rm -rf _corpus_data
mkdir _corpus_data

for D in $UD_DATA/UD_*
do
    echo "Processing $D"
    L=`basename $D | perl -pe s/UD_//`
    python $UD_TOOLS/conllu-stats.py --json $D/*.conllu > _corpus_data/$L.json
    echo
    echo
done
