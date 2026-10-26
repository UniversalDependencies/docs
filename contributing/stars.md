---
layout: base
title:  'Star ranking of treebanks'
udver: '2'
---

# Star Ranking of Treebanks

Some languages have multiple treebanks in UD. They may differ along multiple dimensions: **size**, **genre**, **corpus type**
(learner corpora, translations / parallel treebanks), **dialect**, **time period**, **annotation detail** and **quality**. All these
factors are potentially important when a user is deciding which treebank(s) to use in their research. As a quick
(and inevitably imperfect) help, some of the criteria are compiled into a numeric score that is presented for each
released treebank on the homepage.

The score is displayed on a scale of 0 to 5 stars (hover over the stars to show the exact score):

<p align="center"><img src="/img/stars_example.png" width="300" /></p>

The star ratings signal at a glance which treebank(s) are a good starting point as a representative dataset for the language.
_They are NOT meant to be compared ACROSS languages._

## Scoring System

In a nutshell, the scoring algorithm for the star ratings
- favors larger, more genre-diverse treebanks over smaller, homogeneous ones
- penalizes treebanks that omit source tokens
- penalizes treebanks that incur validation errors
- favors treebanks that specify all the layers of the UD standard (including lemmas, morphological features)
- favors treebanks in which a wide range of values (for UPOS tags and dependency relations) are attested
- favors treebanks whose annotation layers are declared to be manual (gold) rather than automatic (silver)

The score is computed using the script `evaluate_treebank.pl` from the
[tools repository](https://github.com/UniversalDependencies/tools/blob/master/evaluate_treebank.pl).
If you are wondering how the script arrived at the score for a particular treebank, you can inspect the file `eval.log`
in the master branch of the repository for the treebank.

## Discussion

The star ranking was implemented in February 2018 in response to frequent user questions about
which treebank for a language was best to use. This had become difficult for the release team to answer
qualitatively due to the growing number of contributed languages and treebanks.
(Also, around this time it was decided that all treebank names should incorporate an acronym;
using the naming pattern *UD_Language* for each language's first contributed treebank gave the incorrect
impression that this was the default/recommended treebank for the language.)

Thus, an automatic scoring method was developed based on information provided by the treebank
contributors in metadata, and by statistics collected directly on the data. Training parsers was still considered an important
use case for the treebanks in 2018, hence the size plays an important role in the score, but we wanted other criteria,
in particular those that could at least indirectly reflect quality of the annotation (if we only wanted quantity, we
could just order the treebanks by the number of tokens; but for example in some languages we knew that one treebank
had morphological features annotated manually, while in the other treebank they were predicted by a tagging model;
therefore, the former treebank was considered more trustworthy in that respect). The list of criteria and their weights
were debated among the release task force for quite a while, and they could certainly be adjusted back and forth, but
they will never be perfect.

There are a few points that people should not forget if they are taking the rating too seriously:

* Never compare scores of treebanks from different languages.
* The scoring criteria heuristically assess a mix of quantity, quality, and diversity. Training parsers was considered as a use case, but not the only use case.
* Different use cases may have different priorities. If you know what is important for you, you should examine the README of each treebank rather than rely on the scores.
* Each treebank is evaluated separately. Sometimes you might be able to combine a treebank with others
  (if you trust that their annotation is sufficiently similar, which is unfortunately not always granted),
  but the ranking makes no attempt at aggregating multiple treebanks. Evaluating one treebank is difficult enough.

For related discussion, see [issue #691](https://github.com/UniversalDependencies/docs/issues/691).
