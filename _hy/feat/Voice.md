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
such as subject and object, to semantic roles, such as agent and patient. See also the related feature [subcategorization](Subcat).

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object is affected by the action (patient).

By default, the finite and non-finite forms of verbs are labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass`, `Voice=Mid` or `Voice=Cau`, see below.

Note, that aorist stem marker _-(ա/ե)ցն(/ր)&nbsp;_ (homonymous with the causative infixes) is used for transtivization of middle voice verbs. Thеse verbs will have also `Voice=Act`, not `Voice=Cau`(see below).

#### Examples

* _Նա <b>ջարդեց</b> բաժակը&nbsp;_ “He <b>broke</b> the cup”
* _Նա <b>կորցրեց</b> գիրքը&nbsp;_ “He <b>lost</b> the book” (but, _Գիրքը <b>կորավ</b>&nbsp;_ “The book was <b>lost</b>.`Mid`”)
* _Նա <b>հանգցրեց</b> լույսը&nbsp;_ “<b></b>” (but, _Լույսը <b>հանգավ</b>&nbsp;_ “<b></b>.`Mid`”)

### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive infixe _-վ-_ (for exeptions see below).

#### Examples

* _Առաջարկությունը <b>մերժվեց</b> (մասնակիցների կողմից)&nbsp;_ “<b></b>”,
* _Նա <b>արհամարվում</b> է ժողովրդից&nbsp;_ “He is <b>despised</b> by the people”,
* _Գետինը <b>ծածկված</b> է ձյունով&nbsp;_ “Earth is <b>covered</b> by snow”,
* _Դրա մասին շատ է <b>խոսվել</b>&nbsp;_ “It was <b>spoken</b> much about that”

### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive and reciprocal verbs (traditionally called medio-passiv); in this case, the verbs are marked with passiv infix _-վ-_ (but the lemma is tagged as non-reflexive, non-reciprocal).

Note, that there is a not-large set of middle voice verbs marked with passive infix _-վ-_ (so-called passivizied middle verbs). These forms are morphologically very close to the passive, do not have morphologically related non-marked counterparts and are tagged `Voice=Mid`. If there is a morphologically related non-marked counterpart, than the two verbs are represented by different lemmas.

#### Examples

* _Նա <b>վախենում</b> է մթից&nbsp;_ “<b></b>”
* _Նա արագ <b>լվացվեց</b>, <b>հագնվեց</b> ու թողեց սենյակը&nbsp;_ “<b></b>”,  (lit: he wash oneself, he dress oneself)
* _Գտավ նրան, <b>գրկախառնվեցին</b>, <b>համբուրվեցին</b> սրտագին&nbsp;_ “<b></b>”  (lit: they embrace each other, they kiss each other)”,
* _Մենք <b>հարձակվեցինք</b> թշնամու վրա&nbsp;_ “We <b>attacked</b> the enemy”,
* _Նա <b>պատրաստվում</b> էր <b>նվիրվելու</b> բեմին&nbsp;_ “<b></b>”,
* _Ամեն ինչ տեսավ, <b>բռնկվեց</b> հոգին&nbsp;_ “<b></b>” (but, _Քաղաքում գործադուլ է <b>բռնկել</b>&nbsp;_ “<b></b>”)
* _Ամիսներ անց բոլորն էլ <b>հաշտվեցին</b> այդ մտքի հետ&nbsp;_ “<b></b>”

### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian this is a feature of verbs. In causative constructions the subject is the entity “causing” the action. It generally translate to English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. 

The causative is expressed by the infix _-ցն-_ and is quite productive.

Note, that the auxiliary _տալ&nbsp;_ (in various tenses and moods) is accombined with infinitve of the content verb to construct the causative voice. Only the auxiliary will have `Voice=Cau`. There will be also voice information at the infinitive.

#### Examples

* _Մայրը <b>քնեցրեց</b> որդուն&nbsp;_ “<b></b>”
* _<b>Սովորեցնում</b> էր նրան լեզու&nbsp;_ “<b></b>”
* _Այդ բոլորը պատերազմ էր <b>հիշեցնում</b> էր նրան լեզու&nbsp;_ “<b></b>”
* _Ամիսներ անց այդ միտքը <b>հաշտեցրեց</b> նրանց&nbsp;_ “<b></b>”
* _վազել_.`Mid` _<b>տալ</b>_.`Cau` “to <b>make</b> somebody run”
* _վազ<b>եցն</b>ել_.`Cau` _<b>տալ</b>_.`Cau` “lit: to <b>make</b> someone <b>make</b> someone run”.
* _հասկանալ_.`Act` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand”,
* _հասկ<b>ացն</b>ել&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand”,
* _հասկ<b>ացն</b>ել_.`Cau` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> someone <b>make</b> someone understand”

հաշտվել.`Mid`-հաշտեցնել
գժտվել.`Mid`-գժտեցնել
հիասթափվել.`Mid`-հիասթափեցնել
խելագարվել.`Mid`-խելագարեցնել
