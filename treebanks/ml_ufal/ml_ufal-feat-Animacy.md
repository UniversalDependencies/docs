---
layout: base
title:  'Statistics of Animacy in UD_Malayalam-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Malayalam-UFAL: Features: `Animacy`

This feature is universal.
It occurs with 2 different values: `Anim`, `Inan`.

78 tokens (39%) have a non-empty value of `Animacy`.
59 types (47%) occur at least once with a non-empty value of `Animacy`.
48 lemmas (45%) occur at least once with a non-empty value of `Animacy`.
The feature is used with 3 part-of-speech tags: <tt><a href="ml_ufal-pos-NOUN.html">NOUN</a></tt> (34; 17% instances), <tt><a href="ml_ufal-pos-PRON.html">PRON</a></tt> (32; 16% instances), <tt><a href="ml_ufal-pos-PROPN.html">PROPN</a></tt> (12; 6% instances).

### `NOUN`

34 <tt><a href="ml_ufal-pos-NOUN.html">NOUN</a></tt> tokens (92% of all `NOUN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `NOUN` and `Animacy` co-occurred: <tt><a href="ml_ufal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (31; 91%), <tt><a href="ml_ufal-feat-Case.html">Case</a></tt><tt>=Acc</tt> (19; 56%).

`NOUN` tokens may have the following values of `Animacy`:

* `Anim` (13; 38% of non-empty `Animacy`): <em>അച്ഛനേക്കാൾ, അച്ഛൻ, അയൽക്കാരൻ, എന്റേത്, പീറ്ററിന്റേത്, പീറ്റർ, പുസ്തകങ്ങൾ, പെൺകുട്ടി, ഭർത്താവിനെ, മേരി</em>
* `Inan` (21; 62% of non-empty `Animacy`): <em>കത്ത്, കാർ, രാജ്യം, ഐസ്ക്രിം, കാരണങ്ങളാൽ, ജനൽ, നിറം, പുകവലി, ബൈക്ക്, മദ്യപാനം</em>
* `EMPTY` (3): <em>ആലിംഗനം, ഇഷ്ടം, മുറി</em>

`Animacy` seems to be **lexical feature** of `NOUN`. 100% lemmas (30) occur only with one value of `Animacy`.

### `PRON`

32 <tt><a href="ml_ufal-pos-PRON.html">PRON</a></tt> tokens (89% of all `PRON` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PRON` and `Animacy` co-occurred: <tt><a href="ml_ufal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (29; 91%), <tt><a href="ml_ufal-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (26; 81%), <tt><a href="ml_ufal-feat-Case.html">Case</a></tt><tt>=Nom</tt> (21; 66%), <tt><a href="ml_ufal-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (20; 63%).

`PRON` tokens may have the following values of `Animacy`:

* `Anim` (28; 88% of non-empty `Animacy`): <em>അവൾ, അവൻ, എൻറെ, ഞാൻ, നിങ്ങൾ, നിങ്ങൾക്ക്, നിനക്ക്, അവന്റെ, അവളുടെ, അവർ</em>
* `Inan` (4; 13% of non-empty `Animacy`): <em>അത്, അവ, ഇത്</em>
* `EMPTY` (4): <em>എന്ത്, ഈ, തന്റെ</em>

`Animacy` seems to be **lexical feature** of `PRON`. 100% lemmas (11) occur only with one value of `Animacy`.

### `PROPN`

12 <tt><a href="ml_ufal-pos-PROPN.html">PROPN</a></tt> tokens (100% of all `PROPN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PROPN` and `Animacy` co-occurred: <tt><a href="ml_ufal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10; 83%), <tt><a href="ml_ufal-feat-Case.html">Case</a></tt><tt>=Nom</tt> (7; 58%).

`PROPN` tokens may have the following values of `Animacy`:

* `Anim` (9; 75% of non-empty `Animacy`): <em>പീറ്റർ, മേരി, ജെയിൻ, പീറ്ററിന്റെ, ബ്രൗണിനെ, സാം, സ്മിത്തിനെ</em>
* `Inan` (3; 25% of non-empty `Animacy`): <em>ഇഗ്വാസു, പാരീസിൽ, ഫ്രാൻസിന്റെ</em>

## Relations with Agreement in `Animacy`

The 10 most frequent relations where parent and child node agree in `Animacy`:
<tt>NOUN --[<tt><a href="ml_ufal-dep-conj.html">conj</a></tt>]--> NOUN</tt> (3; 100%),
<tt>NOUN --[<tt><a href="ml_ufal-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (3; 60%),
<tt>PROPN --[<tt><a href="ml_ufal-dep-conj.html">conj</a></tt>]--> PROPN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="ml_ufal-dep-flat.html">flat</a></tt>]--> PROPN</tt> (2; 100%),
<tt>NOUN --[<tt><a href="ml_ufal-dep-nmod-poss.html">nmod:poss</a></tt>]--> PROPN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="ml_ufal-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (1; 100%).

