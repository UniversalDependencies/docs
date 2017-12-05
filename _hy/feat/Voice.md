---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Act">Act</a></td>
  <td><a href="#Cau">Cau</a></td>
  <td><a href="#Mid">Mid</a></td>
  <td><a href="#Pass">Pass</a></td>
</tr>
</table>

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient.

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object is affected by the action (patient).

All active participles are tagged `Voice=Act`. By default, the finite and non-finite forms of non-reflexive and non-reciprocal verbs are also labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass` and `Voice=Mid`, see below.

Note, that aorist stem markers _-աց(ն/ր), -եց(ն/ր)&nbsp;_ (homonymous with the causative infixes) is used for transtivization of middle voice verbs. This verbs will have also `Voice=Act` (see below).

#### Examples

* _Նա <b>ջարդեց</b> բաժակը&nbsp;_ “He <b>broke</b> the cup”
* _Նա <b>կորցրեց</b> գիրքը&nbsp;_ “He <b>lost</b> the book” (but, _Գիրքը <b>կորավ</b>&nbsp;_ “The book was <b>lost</b>.`Mid`”)

### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

In Armenian, a passive verb may get a passive infixe _-վ-_.

All passive participles are tagged `Voice=Pass`. The finite and non-finite non-reflexive forms are labeled `Voice=Pass` in the passive construction.

#### Examples

*

### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive and reciprocal verbs (traditionally called “passivizied middle verbs”).

#### Examples

* 

### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian this is a feature of verbs.

#### Examples

* 
