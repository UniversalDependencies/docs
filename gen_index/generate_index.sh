#Where's the UD data?
export UD_DATA=$HOME/UD_PROJHOOK/UD-dev-branches
export UD_TOOLS=$HOME/UD_PROJHOOK/tools

#export UD_DATA=$HOME/UD
#export UD_TOOLS=$HOME/UD/tools

#This assumes that refresh_corpus_data.sh did run

python index_page.py --ud-data=$UD_DATA > ../_includes/at_glance.html
git add ../_includes/at_glance.html ../_data/ldata.json && git commit -m "Main page table regenerated (auto)"
