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
  <td><a href="#CauPass">CauPass</a></td>
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

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with passive suffix  _-վ-_/_-v-_ (for exceptions see below).

#### Examples

* _Ընկերության ներկայացուցչի վերաքննիչ բողոքները **մերժվել** են_/_Ënkerowt’yan nerkayac’owc’či verak’nnič boġok’nerë **meržvel** en_ "The company's representative's appeals have been **dismissed**.",
* _վարկային պայմանագրերը **կնքվել** են_/_varkayin paymanagrerë **knk’vel** en_ "the loan agreements have been **concluded**",
* _Դարավոր խոպան հողերը ջուր են ստացել, **ծածկվել** բամբակի ու բրնձի դաշտերով_/_Daravor xopan hoġerë ǰowr en stac’el, **çaçkvel** bambaki ow brnji dašterov_ "The centuries-old barren lands were irrigated and became **covered** with cotton and rice fields."


### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. Needed also for the reflexive, traditionally called mediopassive (for reciprocal verbs see below); in this case, the verbs and their lemmas are marked with passive suffix  _-վ-_/_-v-_. 

Note, that there is a small set of middle voice verbs marked with passive suffix  _-վ-_ (so-called passivizied middle verbs). These forms are morphologically very close to the passive, do not have morphologically related non-marked counterparts and are tagged `Voice=Mid`. If there is a morphologically related non-marked counterpart, then the two verbs are represented by different lemmas (e.g. _վերաբերվել_.`Mid` “treat, be about”, but _վերաբերել_.`Act` “refer to”).

#### Examples
* _**Վախենում** ենք ապրելուց:_/_**Vaxenowm** enk’ aprelowc’_ "We are **afraid** of living."
* _սկսեց **հագնվել**_/_sksec’ **hagnvel**_ "he/she started **getting dressed**"
* _**հարձակվել** են պահակների վրա_/_**harjakvel** en pahakneri vra_ "they **attacked** the guards"
* _աշխատանքը մարդուն օգնում է **հաշտվել** սուրացող ժամանակի հետ_/_ašxatank’ë mardown ògnowm ē **haštvel** sowrac’oġ žamanaki het_ "Work helps a person come to terms with the swift passage of time"

  
### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian the causative voice is a feature of verbs. In causative constructions the subject is the entity “causing” the action. It is generally translated into English as ‘cause/make/have/let/allow’ someone/something to perform action described by the main verb. 

The causative is expressed by the suffix _-ցն-_. It is quite productive and can be used also for transitivisation of intransitive (middle voice) verbs. They will have `Voice=Act` (see above), not `Voice=Cau` (e.g. _**կորցնել**_/_korc’nel_ "lose", _**թաքցնել**_/_t’ak’c’nel_ "hide").

In addition, the auxiliary _տալ_/_tal_ (in various tenses and moods) combines with infinitive of the content verb to form a causative construction. Only the auxiliary is annotated with `Voice=Cau`; the infinitive retains its own voice annotation.

#### Examples

* _Սովորում են **սովորեցնելու**_ `Cau` _համար:_  /_Sovorowm en **sovorec’nelow** hamar_ “They learn in order to **teach**”,
* _Ինքն էլ չուզեց **հիշեցնել**_ `Cau`:_  _Ink’n ēl čowzec’ **hišec’nel**._ “He/She didn't want to remind them either.”,
* _**վազել**_ `Mid` _**տալ**_ `Cau` /_vazel tal_ “**make** someone **run**”,
* _**հասկանալ**_ `Act` _**տալ**_ `Cau` /_**haskanal tal**_ “lit: **make** someone **understand**”,
* _**հասկացնել**_ `Cau`/_**haskac’nel**_ “lit: **make** someone understand”,
* _**հասկացնել**_ `Cau` _**տալ**_ `Cau` /_**haskac’nel tal**_ “lit: **make** someone **make** someone **understand**”.


### <a name="CauPass">`CauPass`</a>: derived causative: passive forms

The value `CauPass` is reserved for the passive forms of the causative verbs. Passives derived from transitive verbs using the productive suffix  _-վ-/-v-_ often function as mediopassive (intransitive) verbs. In such cases, the form with _-վ-/-v-_ constitutes a distinct lemma, e.g., _մաշել_/_mašel_ "to wear out (trans.)" - _մաշվել_/_mašvel_ "to wear out (intrans.)", _հարթել_/_hart’el_ "to smooth" - _հարթվել_/_hart’vel_ "to become smooth", _հալել_/_halel_ "to melt (trans.)" - _հալվել_/_halvel_ "to melt (intrans.)". Consequently, to express a true, agentive passive meaning for these verbs, the passive is formed from the corresponding causative verb.

#### Examples

*  _ջինսե տաբատները **մաշեցվում** են հատուկ մեթոդով_/_ǰinse tabatnerë mašec’vowm en hatowk met’odov_ "Denim pants **are distressed** using a special method."
*  _Երևանին **հիշեցվել, հիշեցվում և դեռ հիշեցվելու** է, որ ինքը կստանա ավելին, եթե ավելին անի_/_Erewanin **hišec’vel, hišec’vowm ew deṙ hišec’velow** ē, or ink’ë kstana avelin, et’e avelin ani_/_Yerevan **has been reminded, is being reminded, and will continue to be reminded** that it will get more if it does more._


### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.
The reciprocal is expressed by the passive suffix _-վ-_/_-v-_ however, the verb roots that can become reciprocal are limited.

#### Examples

* _Պետրոսը և Մերին **գրկախառնվեցին**_/_Petrosë ew Merin **grkaxaṙnvec’in**_ “Peter and Mary **hugged each other**”.
<!-- Interlanguage links updated Út 30. června 2026, 10:33:53 CEST -->
