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
  <td><a href="#Rcp">Rcp</a></td>
</tr>
</table>

Voice is a feature of verbs that helps to map the traditional syntactic functions, such as subject and object, to semantic
roles, such as agent and patient. See also the related feature [subcategorization](Subcat).

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object is affected by the action (patient).

By default, the finite and non-finite forms of verbs are labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass`, `Voice=Mid` or `Voice=Cau` (see below).

#### Examples

* _խօզըն <b>ջօհար</b> ե՞րբ ճանչէ/xòzën ǰòhar erb č̣ančē_ “When does a pig ever <b>recognize</b> a jewel?”
* _գարի լուացած <b>ցամաքեցուր</b>/gari lowac’aç c’amak’ec’owr_ “Dry the washed barley” (but, _Գարին <b>ցամքեցաւ</b>_`Mid` “The barley <b>dried</b> up `Mid`”),
* _զբիբսն <b>զօրացուցանէ</b>/zbibsn zòrac’owc’anē_ “(it) strengthens the pupils” (but, _յաղթէ զթագաւորն եւ <b>զօրանայ</b>_ `Mid` “He defeats the king and <b>grows strong</b> `Mid`”)
  
### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive infixe _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ (for exceptions see below).
Note that in Middle Armenian the passive meaning may sometimes lack a distinct morphological marker (particularly in the resultative participle), as in Classical Armenian. In such cases, passivity is inferred from the verb’s valency and the presence of an oblique agent.

#### Examples

* _Առաջարկությունը <b>մերժվեց</b> (մասնակիցների կողմից)_ “The suggestion <b>was denied</b> (by the participants)”,
* _Եկեղեցին բարձր էր եւ լայն, Անսիւն <b>շինած</b> էր 'ւ անգերան_ “The church was high and wide, <b>built</b> without columns and beams”,
* _Անտառը <b>ծածկված</b> է ձյունով_ “The forest is <b>covered</b> by snow”.

### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive, traditionally called medio-passiv (for reciprocal verbs see below); in this case, the verbs are marked with passiv infix _-վ-_ (but the lemma is tagged as non-reflexive). A reflexive voice will be distinguished in future. 

Note, that there is a not large set of middle voice verbs marked with passive infix _-վ-_ (so-called passivizied middle verbs). These forms are morphologically very close to the passive, do not have morphologically related non-marked counterparts and are tagged `Voice=Mid`. If there is a morphologically related non-marked counterpart, than the two verbs are represented by different lemmas (e.g. _վերաբերվել&nbsp;_.`Mid` “treat, be about”, but _վերաբերել&nbsp;_.`Act` “refer to”).

#### Examples

* _Նա <b>վախենում</b> է մթից_ “He is <b>afraid</b> of darkness”,
* _Նա արագ <b>լվացվեց</b>, <b>հագնվեց</b>_ “He <b>washed</b>, <b>dressed</b> quickly (lit: he washed himself, he dressed himself)”,
* _Մենք <b>հարձակվեցինք</b> թշնամու վրա&nbsp;_ “We <b>attacked</b> the enemy”,
* _Ամիսներ անց բոլորն էլ <b>հաշտվեցին</b> այդ մտքի հետ&nbsp;_ “After several months everybody <b>stood</b> thought of it”.

### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian this is a feature of verbs. In causative constructions the subject is the entity “causing” the action. It is generally translated into English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. 

The causative is expressed by the infix _-ցն-_. It is quite productive and can be used also for transitivisation of intransitive (middle voice) verbs. They will have `Voice=Act`, not `Voice=Cau` (e.g. _<b>կորցնել, հանգցնել</b>_).

Note, that the auxiliary _տալ&nbsp;_ (in various tenses and moods) is accombined with infinitve of the content verb to construct the causative voice. Only the auxiliary will have `Voice=Cau`. There will be also voice information at the infinitive.

#### Examples

* _չի <b>ուտեցնել</b>_ “He/she does not <b>feed (make smb. eat)</b>” (but, _նա <b>կերավ</b>_.`Act` “he/she <b>ate</b>`Act`”).

* _Մայրը <b>քնեցրեց</b>_`Act` _որդուն&nbsp;_ “The mather <b>put</b> her son to sleep”,
* _<b>Սովորեցնում</b>_ `Cau` _էր նրան լեզու&nbsp;_ “He <b>tought</b> her a foreign language”,
* _Այդ բոլորը պատերազմ էր <b>հիշեցնում</b>_ `Cau` _նրան&nbsp;_ “All these things <b>reminded</b> him a war”,
* _Ո՞ր քամին <b>հանգցրեց</b>_ `Act` _նրանց սերը&nbsp;_ “Which wind <b>extinguished</b>.`Cau` their love (lit: made the love to extinguish)”,
* _վազել_.`Mid` _<b>տալ</b>_.`Cau` “to <b>make</b> somebody run”,
* _<b>վազեցնել</b>_.`Cau` _<b>տալ</b>_.`Cau` “lit: to <b>make</b> someone <b>make</b> someone run”,
* _հասկանալ_.`Act` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand”,
* _<b>հասկացնել</b>&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand”,
* _<b>հասկացնել</b>_.`Cau` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> someone <b>make</b> someone understand”.

### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.

The reciprocal is expressed by the passiv infix _-վ-_ however, the verb roots that can become reciprocal is limited.

#### Examples

* _Նրանք <b>գրկախառնվեցին</b>&nbsp;_ “They hugged each other”.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:20:55 CET -->
