---
layout: feature
title: 'Gender[psor]'
shortdef: 'possessor’s gender'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fem">Fem</a></td>
  <td><a href="#Masc">Masc</a></td>
  <td><a href="#Neut">Neut</a></td>
</tr>
</table>

Possessive
adjectives and pronouns may have two different genders: that of the
possessed object (gender agreement with modified noun) and that of
the possessor (lexical feature, inherent gender). The `Gender[psor]`
feature captures the possessor's gender.

In
the Czech examples below, the masculine `Gender[psor]` implies using one
of the suffixes <I>-</I><I>ův, -ova, -ovo,</I>
and the feminine `Gender[psor]` implies using one of <I>-</I><I>in,
-ina, -ino</I>.

### <a name="Masc">`Masc`</a>: masculine possessor

#### Examples

* [cs]
<span style='color: red'><I>otcův
syn</I></span>
(father's
son; PossGender=Masc|Gender=Masc);
<span style='color: red'><I>otcova
dcera</I></span>
(father's
daughter; PossGender=Masc|Gender=Fem);
<span style='color: red'><I>otcovo
dítě</I></span>
(father's
child; PossGender=Masc|Gender=Neut).

### <a name="Fem">`Fem`</a>: feminine possessor

#### Examples

* [cs]
<span style='color: red'><I>m</I></span><span style='color: red'><I>atčin
syn</I></span>
(mother's
son; PossGender=Fem|Gender=Masc);
<span style='color: red'><I>matčina
dcera</I></span>
(mother's
daughter; PossGender=Fem|Gender=Fem);
<span style='color: red'><I>matčino
dítě</I></span>
(mother's
child; PossGender=Fem|Gender=Neut).

### <a name="Neut">`Neut`</a>: neuter possessor

#### Examples

* [cs] _Dítě plakalo, protože někdo odnesl <b>jeho</b> hračku._ “The child wept because somebody took away <b>its</b> (=the child's) toy.”

<!-- Interlanguage links updated St lis 3 20:58:22 CET 2021 -->
