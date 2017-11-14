---
layout: base
title: 'Working Group on Data Splits'
udver: '2'
---

# Working Group on Data Splits

Until the CoNLL 2017 shared task, UD did not have clear guidelines how to
split the data to training, development and test parts. The shared task
guidelines were only focused on participation in the task, and were changed
on the fly. This is an attempt to put together a set of recommendations that
will hopefully work for treebanks of various sizes and will be more stable
over time.

<strong>Note that at present this is just a proposal under discussion and it may
change without warning! When the discussion is over, the guidelines will be
moved from here to the how-to-contribute pages.</strong>

These guidelines are strong recommendations rather than strict rules. In some
cases it may not be even possible to meet all of them with a given dataset.

The general underlying idea is that we do not want to ban tiny datasets from
being released, but we only want to distinguish training and test sets if
the test set will be large enough (the 10K-word threshold was set in the
CoNLL 2017 shared task) and if the data that is left for training is at least
as large as the test set. Making an official split is useful for comparison
of experiments evaluated on the treebank, but with small treebanks people
should do ten-fold cross-validation anyway.

There is one exception to that general idea. If this is the only UD treebank
in the given language, we may set aside a small sample and call it “train” (or “sample”?)
This may be useful if the treebank is used in a shared task where the systems
are supposed to use cross-lingual projection techniques and cannot access the test data,
but the developers should have access at least to a sample of the language
so they can see the annotation, language properties etc.
In other situations, users should still use the entire data for training and
testing via cross-validation.
Providing the sample is completely optional.
Note that it does not make sense to set aside a sample
if a larger treebank of the same language exists and has training data.

1. If you have less than 20K words:
   * Option A: Keep everything as test data. Users will have to do 10-fold cross-validation if they want to train on it.
   * Option B: If there are no larger treebanks of this language, set aside a small sample (20 to 50 sentences) and call it “train” (or “sample”?) Consider translating and annotating the 20 examples from the [Cairo Cicling Corpus](https://github.com/UniversalDependencies/cairo/blob/master/translations.txt) (CCC) and providing them as the sample.
3. If you have between 20K and 30K words, take 10K as test data and the rest as training data.
4. If you have between 30K and 100K words, take 10K as test data, 10K as dev data and the rest as training data.
6. If you have more than 100K words, take 80% as training data, 10% (min 10K words) as dev data and 10% (min 10K words) as test data.
7. If the treebank contains running text (rather than random shuffled sentences), try to split the data on document or paragraph boundaries.
8. If the treebank contains different domains or genres, try to distribute them proportionally to training, dev and test.
9. If the data in the treebank overlap with another UD treebank of the same language, make sure that the overlapping sentences end up in the same part (training/dev/test) in both treebanks! (By overlap we mean duplicate source text but not individual simple sentences that occur naturally at different positions of independent texts.)
10. If this is one language of a multi-lingual parallel treebank, make sure that corresponding sentences in all languages end up in the same part (training/dev/test)!
11. It is desirable that the data split of one treebank is stable across UD releases, i.e. a sentence that was in training data in release N is not moved to dev or test data in release N+1. In exceptional cases such restructuring can be approved by the release team, provided there are good reasons for it. (One obviously valid reason is that a growing treebank exceeds the 20K-word threshold and is split to training-test.) If at all possible, please try to plan ahead and minimize the need for re-splits in the future.
