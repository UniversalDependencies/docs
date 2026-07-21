---
layout: feature
title: 'Echo'
shortdef: 'is this an echo word or a reduplicative?'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Ech">Ech</a></td>
  </tr>
</table>

This feature covers echo words in Armenian. Echo words get the same POS tag as the head word or will be tagged according to their basic use.

See also the related feature [Hyph]().

### <a name="Ech">`Ech`</a>: echo

The word fully or partially rhymes with a previous or following word but it is not identical to it and typically does not have any meaning of its own. The echoed part is a form that does not occur independently outside such compounds.
In Armenian, it generalizes or specifies the meaning of the previous or following word and is translated as “or something”, “etc.”, “and the like” etc.

#### Examples

* _տուն-<b>մուն</b>_/_town-<b>mown</b>_ “house and things like that”,
* _աման-<b>չաման</b>_/_aman-<b>čaman</b>_ “dishes and the like, kitchenware”,
* _<b>առոք</b>-փառոք_/_<b>aṙokʼ</b>-pʼaṙokʼ_ “good and proper”,
* _մարդ-<b>մուրդ</b>_/_mard-<b>mowrd</b>_ “some people”,
* _<b>դափ</b>-դատարկ_/_<b>dapʼ</b>-datark_ “completely empty”,
* _<b>նոփ</b>-նոր_/_<b>nopʼ</b>-nor_ “completely new”.

Note that in the Armenian UD treebanks reduplicative compounds (e.g. _երկու-երկու_/_erkow-erkow_ “two by two”, _մեծ-մեծ_/_meç-meç_ “very big; in large pieces/chunks”, _գույն-գույն_/_gowyn-gowyn_ “of many colors”, _պես-պես_/_pes-pes_ “different, of various kinds”) are not annotated with `Echo=Rdp`. Instead, both components are annotated according to their ordinary lexical properties, and the reduplicative relation between them is represented by the dependency relation `compound:redup`.

In some cases, one of the components of a reduplicative compound may itself be modified by other words.

* _ինձ ու <b>ինձ</b>_/_inj ow <b>inj</b>_ “to myself”,
* _րոպե առ <b>րոպե</b>_/_rope aṙ <b>rope</b>_ “minute by minute”
<!-- Interlanguage links updated Út 30. června 2026, 10:58:51 CEST -->
