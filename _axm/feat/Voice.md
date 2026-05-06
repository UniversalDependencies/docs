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

* _խօզըն ջօհար ե՞րբ <b>ճանչէ</b>_/_xòzën ǰòhar erb č̣ančē_ “When does a pig ever <b>recognize</b> a jewel?”
* _գարի լուացած <b>ցամաքեցուր</b>_/_gari lowac’aç c’amak’ec’owr_ “Dry the washed barley” (but, _Գարին <b>ցամքեցաւ</b>_`Mid` “The barley <b>dried</b> up `Mid`”),
* _զբիբսն <b>զօրացուցանէ</b>_/_zbibsn zòrac’owc’anē_ “(it) strengthens the pupils” (but, _յաղթէ զթագաւորն եւ <b>զօրանայ</b>_ `Mid` “He defeats the king and <b>grows strong</b> `Mid`”)
  
### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive infixe _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ (for exceptions see below).
Note that in Middle Armenian the passive meaning may sometimes lack a distinct morphological marker (particularly in the resultative participle), as in Classical Armenian. In such cases, passivity is inferred from the verb’s valency and the presence of an oblique agent.

#### Examples

* _Եւ թէ <b>ուտուի</b>' աղեցն զեն է_/_Ew t’ē owtowi' aġec’n zen ē_ “If <b>eaten</b>, it is harmful to the intestines”,
* _Եկեղեցին բարձր էր եւ լայն, Անսիւն <b>շինած</b> էր 'ւ անգերան_/_Ekeġec’in barjr ēr ew layn, Ansiwn šinaç ēr 'w angeran_ “The church was high and wide, <b>built</b> without columns and beams”,
* _Վասն սըրբոց առաքելոցն, Որ ի քենէ են <b>ձեռնադրած</b>_/_Vasn sërboc’ aṙak’eloc’n, Or i k’enē en jeṙnadraç_ “For the holy apostles, Who <b>were ordained</b> by you”.


### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive, traditionally called mediopassiv (for reciprocal verbs see below); in this case, the verbs are marked with passiv infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ (but the lemma is tagged as non-reflexive).


#### Examples

* _Ոնց որ լուսն լուսանայր, <b>բարձրանայի</b> բունս <b>մտնուի</b>_/_Onc’ or lowsn lowsanayr, barjranayi bowns mtnowi_ “Just as it would dawn, I would rise and enter my nest”,
* _Թէ իրմով <b>լուացուին</b>, շատ քուն տա անել_/_T’ē irmov lowac’owin, šat k’own ta anel_ “If they wash themselves with it, it induces much sleep”,
* _Որթն <b>բացւեալ</b> է տնկոյս_/_Ort’n bac’weal ē tnkoys_ “The vine of this sapling <b>has blossomed</b>”,
* _սոքայ եխպայրք էին <b>բաժանված</b>_/_sok’ay expayrk’ ēin bažanvaç_ “They were separated brothers”,

### <a name="Cau">`Cau`</a>: causative voice

Note, that in Middle Armenian this is a feature of verbs. In causative constructions the subject is the entity “causing” the action. It is generally translated into English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. 

The causative in Middle Armenian is expressed by both the Classical Armenain infix _-ուցան-_ and its phonologically altered new variant _-ցըն- (-ցն-)_. It is quite productive and can be used also for transitivisation of intransitive (middle voice) verbs. They will have `Voice=Act`, not `Voice=Cau` (e.g. _<b>սատակեցուցանել</b>/satakec’owc’anel_ “kill, annihilate”, _<b>շողցնել</b>/šoġc’nel</b>_ “to make shine”).

Note, that the auxiliary _տալ/tal_ (in various tenses and moods) is accombined with infinitve of the content verb to construct the causative voice. Only the auxiliary will have `Voice=Cau`. There will be also voice information at the infinitive.

#### Examples

* _Եւ թէ ուտեցնես_ `Cau` _այլ օգտէ_/_Ew t’ē owtec’nes ayl ògtē_ “And if you <b>make (him/her) eat</b>, it will be even more beneficial”
* _զկաթն կու պակսեցնէ_ `Act`/_zkat’n kow paksec’nē_ “It reduces the milk”,

### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.

The reciprocal is expressed by the passiv infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ however, the verb roots that can become reciprocal is limited.

#### Examples

* _...որ ունին զկապողութեան ուժն, եւ ունին զլուծման ուժն, եւ յիրար <b>խառնուեցան</b>_/_or ownin zkapoġowt’ean owžn, ew ownin zlowçman owžn, ew yirar xaṙnowec’an_ “...which possess the power of binding and the power of dissolving, and were <b>mixed together</b>”.
<!-- Interlanguage links updated St 6. května 2026, 20:44:34 CEST -->
