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

* _խօզըն ջօհար ե՞րբ <b>ճանչէ</b>_/_xòzën ǰòhar erb <b>č̣ančē</b>_ “When does a pig ever <b>recognize</b> a jewel?”
* _գարի լուացած <b>ցամաքեցուր</b>_/_gari lowac’aç <b>c’amak’ec’owr</b>_ “<b>Dry</b> the washed barley” (but, _Գարին <b>ցամքեցաւ</b>_`Mid` “The barley <b>dried up</b> `Mid`”),
* _զբիբսն <b>զօրացուցանէ</b>_/_zbibsn <b>zòrac’owc’anē</b>_ “(it) <b>strengthens</b> the pupils” (but, _յաղթէ զթագաւորն եւ <b>զօրանայ</b>_ `Mid` “He defeats the king and <b>grows strong</b> `Mid`”)
  
### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ (for exceptions see below).
Note that in Middle Armenian the passive meaning may sometimes lack a distinct morphological marker (particularly in the resultative participle), as in Classical Armenian. In such cases, passivity is inferred from the verb’s valency and syntactic context, including the presence of an oblique agent when overtly expressed.

#### Examples

* _Եւ թէ <b>ուտուի</b>' աղեցն զեն է_/_Ew t’ē <b>owtowi</b>' aġec’n zen ē_ “If <b>eaten</b>, it is harmful to the intestines”,
* _Եկեղեցին բարձր էր եւ լայն, Անսիւն <b>շինած</b> էր 'ւ անգերան_/_Ekeġec’in barjr ēr ew layn, Ansiwn <b>šinaç</b> ēr 'w angeran_ “The church was high and wide, <b>built</b> without columns and beams”,
* _Վասն սըրբոց առաքելոցն, Որ ի քենէ են <b>ձեռնադրած</b>_/_Vasn sërboc’ aṙak’eloc’n, Or i k’enē en <b>jeṙnadraç</b>_ “For the holy apostles, Who <b>were ordained</b> by you”.


### <a name="Mid">`Mid`</a>: middle voice

The middle voice is situated between active and passive. It is also used for the reflexive verbs, traditionally called mediopassive (for reciprocal verbs see below); in this case, the verbs are marked with passive infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ (but the lemma is tagged as non-reflexive).

#### Examples

* _Ոնց որ լուսն լուսանայր, <b>բարձրանայի</b> բունս <b>մտնուի</b>_/_Onc’ or lowsn lowsanayr, <b>barjranayi</b> bowns <b>mtnowi</b>_ “Just as it would dawn, I would <b>rise</b> and <b>enter</b> my nest”
* _Թէ իրմով <b>լուացուին</b> շատ քուն տա անել_/_T’ē irmov <b>lowac’owin</b>, šat k’own ta anel_ “If they <b>wash themselves</b> with it, it induces much sleep”
* _Որթն <b>բացւեալ</b> է տնկոյս_/_Ort’n <b>bac’weal</b> ē tnkoys_ “The vine of this sapling <b>has blossomed</b>”
* _սոքայ եխպայրք էին <b>բաժանված</b>_/_sok’ay expayrk’ ēin <b>bažanvaç</b>_ “They were <b>separated</b> brothers”

### <a name="Cau">`Cau`</a>: causative voice

Note that in Middle Armenian causative voice is a feature of verbs. In causative constructions, the subject is the entity that “causes” the action. It is generally translated into English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. 

The causative in Middle Armenian is expressed either by the Classical Armenian infix _-ուցան-_/_owc’an_ or by its phonologically altered new variant _-ցըն- (-ցն-)_/_-c’ën- (-cn-)_. These markers are quite productive and may also derive transitive verbs from intransitive (middle-voice) verbs. Such verbs are tagged `Voice=Act`, not `Voice=Cau`, as they functions as an ordinary lexical transitive verb rather than as a causative construction (e.g. _սատակեցուցանել_/_satakec’owc’anel_ “kill, annihilate” (from _սատկիլ_/_satkil_ “to die”) , _շողցնել_/_šoġc’nel_ “to make shine” (from _շողալ_/_šoġal_ “to shine”)).

In addition, the auxiliary _տալ_/_tal_ (in various tenses and moods) combines with infinitive of the content verb to form a causative construction. Only the auxiliary is annotated with `Voice=Cau`; the infinitive retains its own voice annotation.

#### Examples

* _Եւ թէ <b>ուտեցնես</b>_ `Cau` _այլ օգտէ_/_Ew t’ē <b>owtec’nes</b> ayl ògtē_ “And if you <b>make (him/her) eat</b>, it will be even more beneficial”
* _զկաթն կու <b>պակսեցնէ</b>_ `Act`/_zkat’n kow <b>paksec’nē</b>_ “It <b>reduces</b> the milk”,
* _զմեղապարտսն մէն <b>տայ սպաննել</b>_/_zmeġapartsn mēn <b>tay spannel</b>_ He only <b>has</b> the criminals <b>killed</b>.

### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.
The reciprocal is expressed by the passive infix _-ու- (-ւ-, -վ-)/-ow- (-w-, -v-)_ however, the verb roots that can become reciprocal is limited.

#### Examples

* _...որ ունին զկապողութեան ուժն, եւ ունին զլուծման ուժն, եւ յիրար <b>խառնուեցան</b>_/_or ownin zkapoġowt’ean owžn, ew ownin zlowçman owžn, ew yirar <b>xaṙnowec’an</b>_ “...which possess the power of binding and the power of dissolving, and <b>mixed with each other</b>”.
<!-- Interlanguage links updated Út 30. června 2026, 10:59:23 CEST -->
