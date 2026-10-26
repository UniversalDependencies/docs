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

This feature covers echo words in Western Armenian. Echo words get the same POS tag as the head word unless they are tagged according to their basic lexical use.

See also the related feature [Hyph]().

### <a name="Ech">`Ech`</a>: echo

The word fully or partially rhymes with a previous or following word but it is not identical to it and typically does not have any meaning of its own. The echoed part is a form that does not occur independently outside such compounds.
In Western Armenian, it generalizes or specifies the meaning of the previous or following word and is translated as “or something”, “and the like” etc.

#### Examples

* _հագուստ-<b>կապուստ</b>_/_hagowst-<b>kapowst</b>_ “attire, outfit”,
* _<b>շիփ</b>-շիտակ_/_<b>šipʼ</b>-šitak_ “direct and honest”,
* _<b>միս</b>-մինակ_/_<b>mis</b>-minak_ “all alone, completely alone”,
* _ափեղ-<b>ցփեղ</b>_/_apʼeġ-<b>cʼpʼeġ</b>_ “nonsensical, absurd”,
* _ձայն <b>ձուն</b>_/_jayn <b>jown</b>_ “(not) a peep, (not) a sound”.

Note that in the Western Armenian UD treebank reduplicative compounds (e.g. _կում կում_/_kowm kowm_ “sip by sip, in sips”, _մեծ-մեծ_/_meç-meç_ “very big; in large pieces/chunks”, _երկար-երկար_/_erkar-erkar_ “very long”, _զատ զատ_/_zat zat_ “separately, one by one”) are not annotated with `Echo=Rdp`. Instead, both components are annotated according to their regular lexical properties, and the reduplicative relation between them is represented by the dependency relation `compound:redup`.

In some cases, one of the components of a reduplicative compound may itself be modified by other words.

* _լի ու լի_/_li ow li_ “to the fullest, more than enough”,
* _դէմ առ դէմ_/_dēm aṙ dēm_ “face to face”
<!-- Interlanguage links updated Út 30. června 2026, 10:58:51 CEST -->
