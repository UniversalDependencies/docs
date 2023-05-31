---
layout: base
title:  'Statistics of Person in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

3484 tokens (15%) have a non-empty value of `Person`.
411 types (8%) occur at least once with a non-empty value of `Person`.
1 lemmas (0) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (1648; 7% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (1305; 5% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (531; 2% instances).

### `AUX`

1648 <tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> tokens (93% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="hi_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1298; 79%), <tt><a href="hi_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1186; 72%), <tt><a href="hi_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (835; 51%).

`AUX` tokens may have the following values of `Person`:

* `1` (29; 2% of non-empty `Person`): हूं, हैं, सकते, है, चाहिए, था, थे, दिए, पड़ता, सकता
* `2` (5; 0% of non-empty `Person`): हैं, दें, देते, सकते
* `3` (1614; 98% of non-empty `Person`): है, हैं, था, गया, गयी, हुए, दिया, थे, गए, थी
* `EMPTY` (128): हो, जा, कर, जाने, होने, करने, देने, पड़, अपुलियाई, आने

### `VERB`

1305 <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> tokens (63% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="hi_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1288; 99%), <tt><a href="hi_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1089; 83%), <tt><a href="hi_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (944; 72%), <tt><a href="hi_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (914; 70%).

`VERB` tokens may have the following values of `Person`:

* `1` (22; 2% of non-empty `Person`): कहते, करता, करते, करूंगा, करेंगे, किया, गंवा, चुना.., जाएं, था
* `2` (7; 1% of non-empty `Person`): करते, करें, गिरा, चलिये, चाहें, हैं, हों
* `3` (1276; 98% of non-empty `Person`): किया, है, कहा, की, था, करते, थी, हैं, हुआ, हुई
* `EMPTY` (753): करने, कर, हो, होने, करना, रहने, बन, बनाने, रखने, देने

### `PRON`

531 <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> tokens (47% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="hi_pud-feat-Gender-psor.html">Gender[psor]</a></tt><tt>=EMPTY</tt> (452; 85%), <tt><a href="hi_pud-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt> (451; 85%), <tt><a href="hi_pud-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (441; 83%), <tt><a href="hi_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (436; 82%), <tt><a href="hi_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (397; 75%), <tt><a href="hi_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt> (276; 52%), <tt><a href="hi_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (272; 51%).

`PRON` tokens may have the following values of `Person`:

* `1` (101; 19% of non-empty `Person`): मैं, मैंने, हम, मुझे, हमारे, हमें, मेरे, हमने, हमारी, माई
* `2` (17; 3% of non-empty `Person`): आप, आपको, आपके, यू, तुमसे
* `3` (413; 78% of non-empty `Person`): वह, उसने, उसके, उसे, उसकी, उसका, वे, उन्हें, उन्होंने, उनकी
* `EMPTY` (597): जो, यह, अपने, अपनी, इसके, जिसमें, इसे, इसमें, क्या, ऐसा

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="hi_pud-dep-aux.html">aux</a></tt>]--> AUX</tt> (586; 56%),
<tt>VERB --[<tt><a href="hi_pud-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (148; 79%),
<tt>VERB --[<tt><a href="hi_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (82; 64%),
<tt>VERB --[<tt><a href="hi_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (75; 73%),
<tt>VERB --[<tt><a href="hi_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (47; 70%),
<tt>VERB --[<tt><a href="hi_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="hi_pud-dep-obl.html">obl</a></tt>]--> VERB</tt> (3; 100%),
<tt>VERB --[<tt><a href="hi_pud-dep-compound.html">compound</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="hi_pud-dep-cop.html">cop</a></tt>]--> AUX</tt> (1; 100%).

