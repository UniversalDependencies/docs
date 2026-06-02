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

Voice is a feature of verbs that helps to map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient. See also the related feature [subcategorization](Subcat).

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object is affected by the action (patient).

By default, the finite and non-finite forms of verbs are labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass`, `Voice=Mid` or `Voice=Cau` (see below).

#### Examples
* _Ես **ջարդում** եմ նրա օղիները_/_Es **ǰardowm** em nra òġinerë_ "I am **breaking** his vodka bottles."
* _չէինք ցանկանում տղաներին **կորցնել**_/_čēink’ c’ankanowm tġanerin **korc’nel**_ "we didn't want to **lose** the boys."
* _ճշմարտությունը հավերժ չես **թաքցնի**_/_č̣šmartowt’yownë haverž čes **t’ak’c’ni**_ "You can't **hide** the truth forever."


### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive infixe _-վ-_/_-v-_ (for exceptions see below).

#### Examples

* _Ընկերության ներկայացուցչի վերաքննիչ բողոքները **մերժվել** են_/_Ënkerowt’yan nerkayac’owc’či verak’nnič boġok’nerë **meržvel** en_ "The company's representative's appeals have been **dismissed**.",
* _վարկային պայմանագրերը **կնքվել** են_/_varkayin paymanagrerë **knk’vel** en_ "the loan agreements have been **concluded**",
* _Դարավոր խոպան հողերը ջուր են ստացել, **ծածկվել** բամբակի ու բրնձի դաշտերով_/_Daravor xopan hoġerë ǰowr en stac’el, **çaçkvel** bambaki ow brnji dašterov_ "The centuries-old barren lands were irrigated and became **covered** with cotton and rice fields."


### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive, traditionally called mediopassive (for reciprocal verbs see below); in this case, the verbs and their lemmas are marked with passiv infix _-վ-_/_-v-_. 

Note, that there is a not large set of middle voice verbs marked with passive infix _-վ-_ (so-called passivizied middle verbs). These forms are morphologically very close to the passive, do not have morphologically related non-marked counterparts and are tagged `Voice=Mid`. If there is a morphologically related non-marked counterpart, than the two verbs are represented by different lemmas (e.g. _վերաբերվել_.`Mid` “treat, be about”, but _վերաբերել&nbsp;_.`Act` “refer to”).

#### Examples
* _**Վախենում** ենք ապրելուց:_/_**Vaxenowm** enk’ aprelowc’_ "We are **afraid** of living."
* _սկսեց **հագնվել**_/_sksec’ **hagnvel**_ "he/she started **getting dressed**"
* _**հարձակվել** են պահակների վրա_/_**harjakvel** en pahakneri vra_ "they **attacked** the guards"
* _աշխատանքը մարդուն օգնում է **հաշտվել** սուրացող ժամանակի հետ_/_ašxatank’ë mardown ògnowm ē **haštvel** sowrac’oġ žamanaki het_ ""

  
### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian this is a feature of verbs. In causative constructions the subject is the entity “causing” the action. It is generally translated into English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. 

The causative is expressed by the infix _-ցն-_. It is quite productive and can be used also for transitivisation of intransitive (middle voice) verbs. They will have `Voice=Act`, not `Voice=Cau` (e.g. _<b>կորցնել, մոտեցնել</b>_).

Note, that the auxiliary _տալ_ (in various tenses and moods) is accombined with infinitve of the content verb to construct the causative voice. Only the auxiliary will have `Voice=Cau`. There will be also voice information at the infinitive.

#### Examples

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
<!-- Interlanguage links updated St 6. května 2026, 20:44:35 CEST -->
