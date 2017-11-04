---
layout: base
title:  'Morphology'
permalink: sl/overview/morphology.html
---

# Morphology

The universal part-of-speech categories, features and values in the Slovenian UD Treebank have been obtained by conversion from the [JOS morphosyntactic specifications](http://nl.ijs.si/jos/index-en.html). The majority of conversions was done automatically by mapping JOS morphosyntactic tags to universal POS tags and features, while in some cases also word forms, lemmas and/or dependency relations were taken into account.

The Slovenian UD tagset includes all universal POS tags and features except for [Voice](Voice). In addition to that, the set of universal features has been extended with five additional features to either describe language-specific features (such as [Gender[psor]](../../sl/feat/Gender-psor.html), [Number[psor]](../../sl/feat/Number-psor.html) and [Variant](../../sl/feat/Variant.html)) or preserve some finer-grained morphological information encoded in the original ssj500k treebank (such as [Abbr](../../sl/feat/Abbr.html), [Foreign](../../sl/feat/Foreign.html)  and [NumForm](../../sl/feat/NumForm.html)).

The conversion principles for individual POS tags and features are detailed in the corresponding Slovenian guidelines and the original JOS morphosyntactic tags have been preserved in the language-specific FEATS column. Further improvements and manual revisions of this work are still a work in progress.

