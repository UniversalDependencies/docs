---
layout: base
title:  'Statistics of NumType in UD_Marathi-CMUPAN'
udver: '2'
---

## Treebank Statistics: UD_Marathi-CMUPAN: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

3805 tokens (3%) have a non-empty value of `NumType`.
770 types (3%) occur at least once with a non-empty value of `NumType`.
660 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="mr_cmupan-pos-NUM.html">NUM</a></tt> (3475; 3% instances), <tt><a href="mr_cmupan-pos-ADJ.html">ADJ</a></tt> (330; 0% instances).

### `NUM`

3475 <tt><a href="mr_cmupan-pos-NUM.html">NUM</a></tt> tokens (96% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (3468; 100% of non-empty `NumType`): <em>एक, दोन, एका, तीन, हजार, चार, पाच, २२, दोन्ही, सहा</em>
* `Ord` (7; 0% of non-empty `NumType`): <em>एका, आठव्या, दोन्ही, नववा, १४, १७</em>
* `EMPTY` (144): <em>चौरस, लाख, एक, कोटी, हजारो, अडीच, चहा, तीन, पेठ, १०</em>

<table>
  <tr><th>Paradigm <i>एका</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>एका, एकाच, एकाचे, एकापेक्षा, एकामागे, एकास, एकाही</em></td><td><em>एका</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (591) occur only with one value of `NumType`.

### `ADJ`

330 <tt><a href="mr_cmupan-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="mr_cmupan-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (317; 96%), <tt><a href="mr_cmupan-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (317; 96%), <tt><a href="mr_cmupan-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (312; 95%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (330; 100% of non-empty `NumType`): <em>दुसऱ्या, पहिल्या, पहिले, दुसर्‍या, पहिली, प्रथम, तिसऱ्या, आठव्या, बाराव्या, दुसरे</em>
* `EMPTY` (8744): <em>सुरू, मोठ्या, प्रसिद्ध, सुंदर, तयार, विविध, प्रमुख, पूर्ण, उपलब्ध, उपस्थित</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (84) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="mr_cmupan-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (236; 89%),
<tt>NUM --[<tt><a href="mr_cmupan-dep-dep.html">dep</a></tt>]--> NUM</tt> (39; 80%),
<tt>NUM --[<tt><a href="mr_cmupan-dep-conj.html">conj</a></tt>]--> NUM</tt> (32; 100%),
<tt>NUM --[<tt><a href="mr_cmupan-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (28; 100%),
<tt>NUM --[<tt><a href="mr_cmupan-dep-compound.html">compound</a></tt>]--> NUM</tt> (22; 100%),
<tt>ADJ --[<tt><a href="mr_cmupan-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 67%),
<tt>NUM --[<tt><a href="mr_cmupan-dep-amod.html">amod</a></tt>]--> NUM</tt> (1; 100%).

