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

Voice is a feature of verbs that helps to map the traditional syntactic functions, such as subject and object, to semantic roles, such as agent and patient. See also the related feature [subcategorization](Subcat).

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object is affected by the action (patient).

By default, the finite and non-finite forms of verbs are labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass`, `Voice=Mid` or `Voice=Cau` (see below).

#### Examples
* _հայելիին մէջ <b>տեսաւ</b> անոր ժպիտը_/_hayeliin mēǰ <b>tesaw</b> anor žpitë_ “he/she saw his/her smile in the mirror”,
* _քրքիջ մը որ կարծես ապակիները կը <b>դողացնէր</b>_/_kʼrkʼiǰ më or karçes apakinerë kë <b>doġacʼnēr</b>_ “laughter that seemed to shake the windowpanes”,
* _ժամանակ ենք <b>վատնած</b>_/_žamanak enkʼ <b>vatnaç</b>_ “we have wasted time”.


### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions. In this case, the verbs are marked with the passive suffix _-ու-_/_-ow-_ (for exceptions see below).

#### Examples

* _տեսուչը <b>հեռացուած</b> է պաշտօնէն_/_tesowčë <b>heṙacʼowaç</b> ē paštònēn_ “The inspector has been <b>dismissed</b> from his post”,
* _բնակարաններ չեն <b>շինուիր</b>_/_bnakaranner čen <b>šinowir</b>_ “Apartments are not being built”,
* _<b>արգիլուած</b> է իրենց Պատրիարքարան մտնալ_/ _<b>argilowaç</b> ē irencʼ Patriarkʼaran mtnal_ “They are <b>forbidden</b> to enter the Patriarchate.”,
* _սեփական շահերէն <b>թելադրուած</b> է_/_sepʼakan šaherēn <b>tʼeladrowaç</b> ē_ “it is driven by personal interest”


### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. It also covers reflexive uses, traditionally described as mediopassive (for reciprocal verbs, see below); in this case, the verbs and their lemmas are marked with the passive suffix _-վ-_/_-v-_. 

Note that there is a small set of middle voice verbs marked with the passive suffix _-վ-_ (so-called passivized middle verbs). These forms are morphologically very close to the passive, do not have morphologically related non-marked counterparts and are tagged `Voice=Mid`. If there is a morphologically related unmarked counterpart, then the two verbs are represented by different lemmas (e.g. _վերաբերվել_ Mid` “treat, be about”, but _վերաբերել_ `Act` “refer to”).

#### Examples
* _ինքնիրեն կը <b>խորհրդածէր</b>_/_inkʼniren kë <b>xorhrdaçēr</b>_ “he/she was <b>thinking</b> to himself/herself”
* _ճիգ ըրած է տօնական <b>հագուիլ</b>_/_č̣ig ëraç ē tònakan <b>hagowil</b>_ “he/she made an effort to dress up / to dress festively”
* _Հայաստանը խոցելի վիճակի մէջ կը <b>գտնուի</b>_/_Hayastanë xocʼeli vič̣aki mēǰ kë <b>gtnowi</b>_ “Armenia is (lit. <b>finds itself</b>) in a vulnerable position”

  
### <a name="Cau">`Cau`</a>: causative voice

In Armenian, the causative voice is a feature of verbs. In causative constructions, the subject is the entity that causes another participant to perform the action denoted by the base verb. Causatives are generally translated into English using verbs _cause, make, have, let, allow_.

Synthetic causatives are formed with the suffix _-ցն-_/_-cʼn-_. It is quite productive and can be used also for deriving a transitive verb from an intransitive or middle verb. In this case, the resulting verb is analyzed as active (Voice=Act) rather than causative (e.g. _կորցնել_/_korc’nel_ “lose”, _թաքցնել_/_t’ak’c’nel_ “hide”).

Armenian also has a periphrastic causative construction in which the auxiliary _տալ_/_tal_ (in various tenses and moods) combines with the infinitive of the content verb. Only the auxiliary is annotated with `Voice=Cau`; the infinitive retains its own voice annotation.

#### Examples

* _Սովորում են <b>սովորեցնելու</b>_ `Cau` _համար:_  /_Sovorowm en <b>sovorec’nelow<b> hamar_ “They learn in order to <b>teach</b>”,
* _Ինքն էլ չուզեց <b>հիշեցնել</b>_ `Cau`:_  _Ink’n ēl čowzec’ <b>hišec’nel</b>._ “He/She didn't want to <b>remind</b> them either.”,
* _<b>վազել</b>_ `Mid` _<b>տալ</b>_ `Cau` /_vazel tal_ <b>make</b> someone <b>run</b>”,
* _<b>հասկանալ</b>_ `Act` _<b>տալ</b>_ `Cau` /_<b>haskanal tal</b>_ “lit: <b>make</b> someone <b>understand</b>”,
* _<b>հասկացնել</b>_ `Cau`/_<b>haskac’nel</b>_ “lit: <b>make</b> someone <b>understand</b>”,
* _<b>հասկացնել</b>_ `Cau` _<b>տալ</b>_ `Cau` /_<b>haskac’nel tal</b>_ “lit: <b>make</b> someone <b>make</b> someone <b>understand</b>”.


### <a name="CauPass">`CauPass`</a>: derived causative: passive forms

The value `CauPass` is reserved for the passive forms of the causative verbs. Passives derived from transitive verbs using the productive suffix  _-վ-/-v-_ often function as mediopassive (intransitive) verbs. In such cases, the form with _-վ-/-v-_ constitutes a distinct lemma, e.g., _մաշել_/_mašel_ “to wear out (trans.)” - _մաշվել_/_mašvel_ “to wear out (intrans.)”, _հարթել_/_hart’el_ “to smooth” - _հարթվել_/_hart’vel_ “to become smooth”, _հալել_/_halel_ “to melt (trans.)” - _հալվել_/_halvel_ “to melt (intrans.)”. Consequently, to express a true, agentive passive meaning for these verbs, the passive is formed from the corresponding causative verb.

#### Examples

* _ջինսե տաբատները <b>մաշեցվում</b> են հատուկ մեթոդով_/_ǰinse tabatnerë <b>mašec’vowm</b> en hatowk met’odov_ “denim pants <b>are distressed</b> using a special method”
* _Երևանին <b>հիշեցվել, հիշեցվում և դեռ հիշեցվելու</b> է, որ ինքը կստանա ավելին, եթե ավելին անի_/_Erewanin <b>hišec’vel, hišec’vowm ew deṙ hišec’velow</b> ē, or ink’ë kstana avelin, et’e avelin ani_ “Yerevan <b>has been reminded, is being reminded, and will continue to be reminded</b> that it will get more if it does more”


### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.
The reciprocal is expressed by the passive suffix _-վ-_/_-v-_ however, the verb roots that can become reciprocal are limited.

#### Examples

* _Պետրոսը և Մերին <b>գրկախառնվեցին</b>_/_Petrosë ew Merin <b>grkaxaṙnvec’in</b>_ “Peter and Mary <b>hugged each other</b>”.
<!-- Interlanguage links updated Út 30. června 2026, 10:59:23 CEST -->
