---
layout: feature
title: 'Typo'
shortdef: 'is this a misspelled word?'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Indicates bad spelling, grammatical error etc. This also includes mistakenly interrupted words that are connected using the [goeswith]() relation.
While the annotation of morphological features is optional, if the treebank does have features, then [Typo]()`=Yes` must be used with the `goeswith` head.

The correct spelling can be indicated in the MISC column with the `CorrectForm` feature,
as discussed in the [page on typos](https://universaldependencies.org/u/overview/typos.html).

Intentionally nonstandard spellings are not considered typos. They should be marked as abbreviations ([Abbr]()) or expressive spellings ([Style]()`=Expr`).

### <a name="Yes">`Yes`</a>: it is typo

#### Examples

* [en] _<b>Barak</b> Obama_

<!-- Interlanguage links updated St lis 3 20:58:31 CET 2021 -->
