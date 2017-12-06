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

By default, the finite and non-finite forms of non-reflexive and non-reciprocal verbs are labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass` or `Voice=Mid`, see below.

Note, that aorist stem markers _-աց(ն/ր), -եց(ն/ր)&nbsp;_ (homonymous with the causative infixes) is used for transtivization of middle voice verbs. This verbs will have also `Voice=Act` (see below).

#### Examples

* _Նա <b>ջարդեց</b> բաժակը&nbsp;_ “He <b>broke</b> the cup”
* _Նա <b>կորցրեց</b> գիրքը&nbsp;_ “He <b>lost</b> the book” (but, _Գիրքը <b>կորավ</b>&nbsp;_ “The book was <b>lost</b>.`Mid`”)

### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms (non-reflexive and non-reciprocal) are labeled `Voice=Pass` in the passive construction. In this case, the form is marked with passive infixe _-վ-_.

#### Examples

* _Առաջարկությունը <b>մերժվեց</b> (մասնակիցների կողմից)&nbsp;_ “<b></b>”,
* _Նա <b>արհմարվում</b> է ժողովրդից&nbsp;_ “He was <b>despised</b> by the people”,
* _Գետինը <b>ծածկված</b> է ձյունով&nbsp;_ “Earth is <b>covered</b> by snow”,
* _Դրա մասին շատ է <b>խոսվել</b>&nbsp;_ “It was <b>spoken</b> much about that”

### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive and reciprocal verbs (traditionally called medio-passiv); in this case, the form is marked with infix _-վ-_ (but the lemma is tagged as non-reflexive, non-reciprocal).

Note, that there is a not large set of middle voice verbs marked with passive infix _-վ-_ (so-called passivizied middle verbs). Although these forms are morphologically very close to the passive and do not have morphologically related non-marked counterparts, they are tagged `Voice=Mid`. If there is a morphologically related non-marked counterpart, than the two verbs are represented by different lemmas.

#### Examples

* _Նա <b>վախենում</b> է մթից&nbsp;_ “<b></b>”
* _Նա արագ <b>լվացվեց</b>, <b>հագնվեց</b> ու թողեց սենյակը&nbsp;_ “<b></b>”,
* _Գտավ նրան, <b>գրկախառնվեցին</b>, <b>համբուրվեցին</b> սրտագին&nbsp;_ “<b></b>”,
* _Մենք <b>հարձակվեցինք</b> թշնամու վրա&nbsp;_ “We <b>attacked</b> the enemy”,
* _Նա <b>պատրաստվում</b> էր <b>նվիրվելու</b> բեմին&nbsp;_ “<b></b>”,
* _Ամեն ինչ տեսավ, <b>բռնկվեց</b> հոգին&nbsp;_ “<b></b>” (but, _Քաղաքում գործադուլ է <b>բռնկել</b>&nbsp;_ “<b></b>”)

### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian this is a feature of verbs.

#### Examples

* 
