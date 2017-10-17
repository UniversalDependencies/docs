#Where's the UD data?
#export UD_DATA=$HOME/git_checkout/universaldependencies
#export UD_TOOLS=$HOME/git_checkout/universaldependencies-tools

export UD_DATA=$HOME/UD_PROJHOOK/UD-dev-branches
export UD_TOOLS=$HOME/UD_PROJHOOK/tools


#export UD_DATA=$HOME/UD

#export UD_DATA=$HOME/UD
#export UD_TOOLS=$HOME/UD/tools

#This assumes that refresh_corpus_data.sh did run

# index_page.py has side effect of modifying ../_data/ldata.json!
# Any subsets must be generated before the main list so that ldata.json contains the full list of treebanks.
# Ideally, the subset scripts should be merged with index_page.py and the subset should be selected by command-line options.
python index_page_slavic.py --ud-data=$UD_DATA > ../_includes/at_glance_slavic.html
python index_page.py --ud-data=$UD_DATA > ../_includes/at_glance.html
python index_page.py --ud-data=$UD_DATA --empty > ../_includes/at_glance_empty.html
git add ../_includes/at_glance.html ../_includes/at_glance_empty.html ../_includes/at_glance_slavic.html ../_data/ldata.json && git commit -m "Main page tables regenerated (auto)"
