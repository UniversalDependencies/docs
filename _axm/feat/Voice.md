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

* _խօզըն ջօհար ե՞րբ **ճանչէ**_/_xòzën ǰòhar erb **č̣ančē**_ “When does a pig ever **recognize** a jewel?”
* _գարի լուացած **ցամաքեցուր**_/_gari lowac’aç **c’amak’ec’owr**_ “**Dry** the washed barley” (but, _Գարին **ցամքեցաւ**_`Mid` “The barley **dried up** `Mid`”),
* _զբիբսն **զօրացուցանէ**_/_zbibsn **zòrac’owc’anē**_ “(it) **strengthens** the pupils” (but, _յաղթէ զթագաւորն եւ **զօրանայ**_ `Mid` “He defeats the king and **grows strong** `Mid`”)
  
### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ (for exceptions see below).
Note that in Middle Armenian the passive meaning may sometimes lack a distinct morphological marker (particularly in the resultative participle), as in Classical Armenian. In such cases, passivity is inferred from the verb’s valency and the presence of an oblique agent.

#### Examples

* _Եւ թէ **ուտուի**' աղեցն զեն է_/_Ew t’ē **owtowi**' aġec’n zen ē_ “If **eaten**, it is harmful to the intestines”,
* _Եկեղեցին բարձր էր եւ լայն, Անսիւն **շինած** էր 'ւ անգերան_/_Ekeġec’in barjr ēr ew layn, Ansiwn **šinaç** ēr 'w angeran_ “The church was high and wide, **built** without columns and beams”,
* _Վասն սըրբոց առաքելոցն, Որ ի քենէ են **ձեռնադրած**_/_Vasn sërboc’ aṙak’eloc’n, Or i k’enē en **jeṙnadraç**_ “For the holy apostles, Who **were ordained** by you”.


### <a name="Mid">`Mid`</a>: middle voice

The middle voice is situated between active and passive. It is also used for the reflexive verbs, traditionally called mediopassive (for reciprocal verbs see below); in this case, the verbs are marked with passive infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ (but the lemma is tagged as non-reflexive).


#### Examples

* _Ոնց որ լուսն լուսանայր, **բարձրանայի** բունս **մտնուի**_/_Onc’ or lowsn lowsanayr, **barjranayi** bowns **mtnowi**_ “Just as it would dawn, I would **rise** and **enter** my nest”
* _Թէ իրմով **լուացուին**, շատ քուն տա անել_/_T’ē irmov **lowac’owin**, šat k’own ta anel_ “If they **wash themselves** with it, it induces much sleep”
* _Որթն **բացւեալ** է տնկոյս_/_Ort’n **bac’weal** ē tnkoys_ “The vine of this sapling **has blossomed**”
* _սոքայ եխպայրք էին **բաժանված**_/_sok’ay expayrk’ ēin **bažanvaç**_ “They were **separated** brothers”

### <a name="Cau">`Cau`</a>: causative voice

Note that in Middle Armenian causative voice is a feature of verbs. In causative constructions, the subject is the entity that “causes” the action. It is generally translated into English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. 

The causative in Middle Armenian is expressed either by the Classical Armenian infix _-ուցան-_/_owc’an_ or by its phonologically altered new variant _-ցըն- (-ցն-)_/_-c’ën- (-cn-)_. It is quite productive and can also be used for transitivization of intransitive (middle-voice) verbs. Such verbs are tagged `Voice=Act`, not `Voice=Cau` (e.g. _սատակեցուցանել_/_satakec’owc’anel_ “kill, annihilate”, _շողցնել/šoġc’nel_ “to make shine”).

In addition, the auxiliary _տալ_/_tal_ (in various tenses and moods) combines with infinitive of the content verb to form a causative construction. Only the auxiliary is annotated with `Voice=Cau`; the infinitive retains its own voice annotation.

#### Examples

* _Եւ թէ **ուտեցնես**_ `Cau` _այլ օգտէ_/_Ew t’ē **owtec’nes** ayl ògtē_ “And if you **make (him/her) eat**, it will be even more beneficial”
* _զկաթն կու **պակսեցնէ**_ `Act`/_zkat’n kow **paksec’nē**_ “It **reduces** the milk”,
* _զմեղապարտսն մէն **տայ սպաննել**_/_zmeġapartsn mēn **tay spannel**_ He only **has** the criminals **killed**.

### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.
The reciprocal is expressed by the passive infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ however, the verb roots that can become reciprocal is limited.

#### Examples

* _...որ ունին զկապողութեան ուժն, եւ ունին զլուծման ուժն, եւ յիրար **խառնուեցան**_/_or ownin zkapoġowt’ean owžn, ew ownin zlowçman owžn, ew yirar **xaṙnowec’an**_ “...which possess the power of binding and the power of dissolving, and were **mixed together**”.
<!-- Interlanguage links updated St 6. května 2026, 20:44:34 CEST -->
