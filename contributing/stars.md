---
layout: base
title:  'Star ranking of treebanks'
udver: '2'
---

# Star Ranking of Treebanks

Some languages have multiple treebanks in UD. They may differ along multiple dimensions: size, genre, corpus type
(learner corpora, translations / parallel treebanks), dialect, time period, annotation detail and quality. All these
factors are potentially important when a user is deciding which treebank(s) to use in their research. As a quick
(and inevitably imperfect) help, some of the criteria are compiled into a numeric score that is presented for each
released treebank on the homepage (0 to 5 stars; if you place your mouse over the stars, the numeric score will appear).

![image](/img/stars_example.png)

The score is computed using the script `evaluate_treebank.pl` from the
[tools repository](https://github.com/UniversalDependencies/tools/blob/master/evaluate_treebank.pl).
If you are wondering how the script arrived at the score of a particular treebank, you can inspect the file `eval.log`
in the master branch of the treebank.

The star ranking was implemented in February 2018 around the time when most UD treebanks were renamed to follow the
naming scheme we keep until today (UD_Language-ACRONYM). Before that, we only used an ACRONYM if we had a second
(third, fourth...) treebank of a language, but the first treebank still was named just UD_Language. Some users thought
that this was the default/best treebank to use, which was not necessarily true. Therefore the core group decided that
every UD treebank will have a short acronym after the language name, even if it is the only treebank of the language.
But for languages where we had multiple treebanks, some users still asked us which treebank we would recommend. The
answer obviously depends on what one wants to do with the treebank, so an advice from a human expert would have its
advantages, but with growing number of languages and treebanks we could not know enough about all of them, so we felt
we needed a numeric score that could be compiled automatically based on information provided by the treebank
contributors and by statististics collected directly on the data. Training parsers was still considered an important
use case for the treebanks in 2018, hence the size plays an important role in the score, but we wanted other criteria,
in particular those that could at least indirectly reflect quality of the annotation (if we only wanted quantity, we
could just order the treebanks by the number of tokens; but for example in some languages we knew that one treebank
had morphological features annotated manually, while in the other treebank they were predicted by a tagging model;
therefore, the former treebank was considered more trustworthy in that respect). The list of criteria and their weights
were debated among the release task force for quite a while, and they could certainly be adjusted back and forth, but
they will never be perfect.

There are a few points that people should not forget if they are taking the rating too seriously:

* Never compare scores of treebanks from different languages.
* The evaluating criteria try to assess a mix of quantity, quality, and diversity. Training parsers was considered as a use case, but not the only use case.
* Different use cases may have different priorities. If you know what is important for you, you should study the README of the treebanks in the first place.
* Each treebank is evaluated separately. Sometimes you might be able to combine a treebank with others
  (if you trust that their annotation is sufficiently similar, which is unfortunately not always granted),
  but the ranking makes no attempt at evaluating that. Evaluating one treebank is difficult enough.

For related discussion, see [issue #691](https://github.com/UniversalDependencies/docs/issues/691).
