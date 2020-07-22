---
layout: base
title:  'Irish UD'
udver: '2'
---

# UD for Irish <span class="flagspan"><img class="flag" src="../../flags/svg/IE.svg" /></span>

## Tokenization and Word Segmentation

In Irish, in general, words are delimited by whitespace characters. Description of exceptions follows:

* Some punctuation marks are attached to a neighbouring word. The word and the punctuation mark are taken together as one token. For example,  _D'_  (contraction for _do_ in _d'ith_ "ate"), _b'_ (in _b'fhearr_ "would prefer") and _O'_ (in surnames) are recognised as single tokens. Abbreviations surch as _srl._ "etc." or _i.n._ "p.m." are also recognised as one token.

* Note that compound prepositions (_os\_cionn_ "above", _in\_aice_ "beside", etc)  are split into two tokens for UD v2, as are some placenames that the tagger recognises (e.g. _Cill\_Dara_) or a limited number of mwes (_chomh\_fada\_is_ "as long as; _cé\_is\_moite_ "except for").

The Irish POS-tagger used in the Irish Dependency Treebank retains these as single tokens and so must be mapped accordingly as the treebanks develop concurrently.

## Morphology

### POS Tags

<table class="typeindex">
  <thead>
    <tr>
      <th>Open class words</th>
      <th>Closed class words</th>
      <th>Other</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-ADJ.html">ADJ</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-ADP.html">ADP</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-PUNCT.html">PUNCT</a></td>
    </tr>
    <tr>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-ADV.html">ADV</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-AUX.html">AUX</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-SYM.html">SYM</a></td>
    </tr>
    <tr>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-INTJ.html">INTJ</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-CCONJ.html">CCONJ</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-X.html">X</a></td>
    </tr>
    <tr>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-NOUN.html">NOUN</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-DET.html">DET</a></td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-PROPN.html">PROPN</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-NUM.html">NUM</a></td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-VERB.html">VERB</a></td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-PART.html">PART</a></td>
      <td> </td>
    </tr>
    <tr>
      <td> </td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-PRON.html">PRON</a></td>
      <td> </td>
    </tr>
    <tr>
      <td> </td>
      <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-pos-SCONJ.html
">SCONJ</a></td>
      <td> </td>
    </tr>
  </tbody>
</table>

The UD part-of-speech (POS) tagset is an extension of the The Google Universal POS tagset (Petrov
et al., 2012) and contains 17 POS tags.
The tags for the Irish Dependency Treebank is based on the PAROLE Morphosyntactic Tagset (ITÉ,
2002).

A mapping from this tagest to the UD tagset for use in the IUDT is given in: Lynn, Teresa and Jennifer Foster, _Universal Dependencies for Irish_ In Proceedings of the 2nd Celtic Language Technology Workshop 2016, Paris, France.

The following is a summary of some specific/ unintuitive choices made to map Irish data conform to Universal POS tags for UDv2:

* The AUX tag is used for the Copula only. All other verbs (including substantive verb _bí_ "to be" are tagged as VERB).
* Verbal adjectives are tagged as ADJ
* The following particles are tagged as PART: adverbial (_go mall_ "slowly"), verbal (_ná déan_ "don't do"), vocative (_a Sheosamh_), comparative (_níos déanaí_ "later"), superlative (_is déanaí_ "latest"), numeral (_a haon_ "one"), relative (_a chonaic sé_ "that he saw"), infinitive (_a dhéanamh_ "to do"), degree (_a luaithe_ "sooner"), name (Seosamh Mac Grianna)
* Verbal nouns are tagged as NOUN
* _ag_ in use with verbal nouns to form a gerund in progressive aspectual phrases are tagged as ADP
* demonstrative pronouns are tagged as PRON (_sin an fadhb_ "that's the problem", _Thug sé sin faoi deara_ "he noticed that")
* demonstrative determiners, on the other hand, are tagged as DET along with all other determiners (_an leabhar sin_ "that book")



---

### Features

Here we summarise the morphological features of Irish which can be categorised into inflectional and lexical features.

<table class="typeindex">
  <tr>
    <td>
      <table class="category">
       <tr><td><strong>Lexical features</strong></td></tr>
         <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Abbr.html">Abbr</a></td>
        </tr>
        <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Dialect.html">Dialect</a></td>
        </tr>
        <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Foreign.html">Foreign</a></td>
        </tr>
        <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-NumType.html">NumType</a></td>
        </tr>
                <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-PartType.html">PartType</a></td>
        </tr>
                <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Poss.html">Poss</a></td>
        </tr>
                <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-PrepForm.html">PrepForm</a></td>
        </tr>
                <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-PronType.html">PronType</a></td>
        </tr>
                <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Reflex.html">Reflex</a></td>
        </tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td colspan="3"><strong>Inflectional features</strong></td></tr>
        <tr>
          <td><i>Nominal</i></td>
          <td><i>Verbal</i></td>
        </tr>
        <tr>
          <td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Case.html">Case</a></td>
          <td><a>Mood</a></td>
        </tr>
        <tr>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Definite.html">Definite</a></td>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Person.html">Person</a></td>
</tr>
        <tr>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Degree.html">Degree</a></td>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Polarity.html">Polarity</a></td>
        </tr>
        <tr>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Gender.html">Gender</a></td>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Tense.html">Tense</a></td>
</tr>
     <tr>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Number.html">Number</a></td>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-VerbForm.html">VerbForm</a></td>
</tr>
     <tr>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Form.html">Form</a></td>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-Voice.html">Voice</a></td>
</tr>
     <tr>
<td><a href="https://universaldependencies.org/treebanks/ga_idt/ga_idt-feat-NounType.html">NounType</a></td>
<td></td>
</tr>
      </table>
    </td>
  </tr>
</table>

Inflection in Irish mainly occurs through suffixation, but initial mutation through lenition and eclipsis is also common. Lenition is a phonological change that softens or weakens the articulation of a consonant. The eclipsis process renders voiced segments as nasalised and voiceless segments as being voiced (Stenson, 1981, p.18). A prominent feature of Irish which influences inflection, is the existence of two sets of consonants,
referred to as "broad" and "slender" consonants. Consonants can be slenderised by accompanying the consonant with a slender vowel, either _e_ or _i_. Broadening occurs through the use of broad vowels; _a_, _o_ or _u_. In general, there needs to be vowel harmony (slender or broad) between stem endings and the initial vowel in a suffix.

* _buail_ "hit"  _ag bualadh na liathróide_ "hitting the ball" (Verbal Noun)
* _buail_ "hit"  _buaileadh an liathróid_ "the ball was hit" (Impersonal Form)

#### VERBS

Verbs inflect for number and person, as well as mood and tense. Verbs can incorporate their subject, inflecting for person and number through suffixation. Such forms are referred to as synthetic verb forms. Most verbs tend to incorporate a subject when it is first person singular or plural. These synthetic forms are generally restricted to the Present Tense, Imperfect Tense, Conditional Mood and Imperative Mood.

* _scríobh_ "write"
* _scríobhaim_ "I write"
* _scríobhfaimid_ "we will write"

However, second person singular and plural subjects are incorporated in some verb tenses and moods:
* _nigh_ "wash"
* _niteá_ "you used to wash" (Past Habitual)
* _nígí!_ "(you pl.) wash!" (Imperative)

Tense is also marked by lenition on some verb forms:
* _dún_ "close"
* _dhún mé_ "I closed"
* dhúnfainn "I would close"


Lenition occurs after the negative particle _ní_:
* _tugaim_ "I give"
* _ní thugaim_ "I do not give"
* _tabharfaidh mé_ "I will give"
* _ní thabharfaidh mé_ "I will not give"

Eclipsis (initial mutation) occurs following clitics such as interrogative particles (an, nach); complementisers (go, nach); and relativisers (a, nach) (Stenson, 1981,pp. 21-26).

* _an dtuigeann sé?_ "does he understand?"
* _nach dtuigeann sé_ "that he does not understand".
* _go dtabharfadh sé_ "that he would give"





#### NOUNS

Modern Irish uses three cases: Nominative, Genitive and Vocative. The nominative form is sometimes
regarded as the "common form" as it is now also used for accusative and dative forms (See [Case]() for a description of 'Case=NomAcc'). Nouns in Irish are divided into five classes, or declensions, depending on the manner in which the genitive case is formed. In addition, there are two grammatical genders in Irish - masculine and feminine. Case, declension and gender are expressed
through noun inflection. For example, _páipéar_ "paper" is a masculine noun in the first declension. Both lenition and slenderisation are used to form the genitive singular form: pháipéir.

* _an dochtúir_ "the doctor"
* _cóta an dochtúra_ "the doctor's coat"
* _an fheoil_ "the meat"
* _boladh an feola_ "the smell of the meat"
* _an coinín_ "the rabbit"
* _eireaball an choinín_ "the rabbit's tail"
* _an siopa_ "the shop"
* _cúl an tsiopa_ "the back of the shop"
* _Máire_ "Mary"
* _a Mháire!_ "Mary!" (Vocative)

In addition, possessive determiners cause nominal inflection through lenition, eclipsis and prefixation.

* _teach_ "house"
* _mo theach_ "my house"
* _ár dteach_ "our house"
* _ainm_ "name"
* _a hainm_ "her name"
* _a n-ainm_ "their name"



#### Adjectives

In general, adjectives follow nouns and agree in number, gender and case. Depending on the noun they modify, adjectives can also inflect. The Christian Brothers (1988, p.63) note eight main declensions of adjectives. They can decline
for genitive singular masculine, genitive singular feminine and nominative plural.

* _bacach_ "lame"
* _bacaigh_ (Gen.Sg.Masc)
* _bacaí_ (Gen.Sg.Fem)
* _bacacha_ (Nom.PL).

Comparative adjectives are also formed through inflection:

* _láidir_ "strong" / _níos láidre_ "stronger"
* _déanach_ "late" / _is déanaí_ "latest"


#### Prepositions

Irish has simple prepositions (e.g. _ar_ "on") and compound prepositions (e.g. _in aghaidh_ "against"). Most of the simple prepositions can inflect for a pronominal object that indicates person and number (known as prepositional pronouns or pronominal prepositions), thus including a nominal element. Compare _le_ and _leis_:

* _bhí sé ag labhairt le fear_ "he was speaking with a man"
* _bhí sé ag labhairt leis_ "he was speaking with him"

These forms are used quite frequently, not only with regular prepositional attachment where pronominal prepositions operate as arguments of verbs or modifiers of nouns and verbs, but also in idiomatic use where they express emotions and states.

* _tá brón orm_ "I am sorry"  (lit. `is sorrow on-me')
* _tá súil agam_ "I hope"



---

## Syntax

---

<table class="typeindex" border="1">
  <tr style="background-color:cornflowerblue">
    <td>
      <table class="category">
        <tr><td><strong></strong></td></tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td><strong>Nominals</strong></td></tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td><strong>Clauses</strong></td></tr>
      </table>
    </td>
      <td>
        <table class="category">
          <tr><td><strong>Modifier words</strong></td></tr>
        </table>
      </td>
    <td>
    <table class="category">
      <tr><td><strong>Function Words</strong></td></tr>
    </table>
        </td>
    </tr>
    <tr>
    <td style="background-color:darkseagreen">
      <table class="category">
        <tr><td><strong>Core arguments</strong></td></tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td><a href='https://universaldependencies.org/ga/dep/nsubj.html'>nsubj</a></td></tr>
        <tr><td>↳<a><strike>nsubj:pass</strike></a></td></tr>
        <tr><td>↳<a><strike>csubj:pass</strike></a></td></tr>
        <tr><td><a href='https://universaldependencies.org/ga/dep/obj.html'>obj</a></td></tr>
        <tr><td><a><strike>iobj</strike></a></td></tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td><a href='https://universaldependencies.org/ga/dep/csubj.html'>csubj</a></td></tr>
        <tr><td>↳<a href='https://universaldependencies.org/ga/dep/csubj-cleft.html'>csubj:cleft</a></td></tr>
        <tr><td>↳<a href='https://universaldependencies.org/ga/dep/csubj-cop.html'>csubj:cop</a></td></tr>
        <tr><td><a href= 'https://universaldependencies.org/ga/dep/ccomp.html'>ccomp</a></td></tr>
        <tr><td><a href='https://universaldependencies.org/ga/dep/xcomp.html'>xcomp</a></td></tr>
        <tr><td>↳<a href='https://universaldependencies.org/ga/dep/xcomp-pred.html'>xcomp:pred</a></td></tr>
      </table>
    </td>
    <td></td>
    <td></td></tr>
    <tr>
      <td style="background-color:darkseagreen">
        <table class="category">
          <tr><td><strong>Non-core dependents</strong></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a href='https://universaldependencies.org/ga/dep/obl.html'>obl</a></td></tr>
          <tr><td>↳<a>obl:tmod</a></td></tr>
           <tr><td>↳<a>obl:prep</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/vocative.html'>vocative</a></td></tr>
          <tr><td><a>expl<strike></strike></a></td></tr>
          <tr><td><a>dislocated</a></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a href='https://universaldependencies.org/ga/dep/advcl.html'>advcl</a></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a href='https://universaldependencies.org/ga/dep/advmod.html'>advmod</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/discourse.html'>discourse</a></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a><strike>aux</strike></a></td></tr>
          <tr><td>↳<a><strike>aux:pass</strike></a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/cop.html'>cop</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/mark.html'>mark</a></td></tr>
          <tr><td>↳<a href='https://universaldependencies.org/ga/dep/mark-prt.html'>mark:prt</a></td></tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color:darkseagreen">
        <table class="category">
          <tr><td><strong>Nominal dependents</strong></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a href='https://universaldependencies.org/ga/dep/nmod.html'>nmod</a></td></tr>
          <tr><td>↳<a href='https://universaldependencies.org/ga/dep/nmod-poss.html'>nmod:poss</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/appos.html'>appos</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/nummod.html'>nummod</a></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a>acl</a></td></tr>
          <tr><td>↳<a href='https://universaldependencies.org/ga/dep/acl-relcl.html'>acl:relcl</a></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a href='https://universaldependencies.org/ga/dep/amod.html'>amod</a></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a href='https://universaldependencies.org/ga/dep/det.html'>det</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/case.html'>case</a></td></tr>
        </table>
      </td>
    </tr>
    <tr style="background-color:cornflowerblue">
      <td>
        <table class="category">
          <tr><td><strong>Coordination</strong></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><strong>MWE</strong></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><strong>Loose</strong></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><strong>Special</strong></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><strong>Other</strong></td></tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table class="category">
          <tr><td><a href='https://universaldependencies.org/ga/dep/conj.html'>conj</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/cc.html'>cc</a></td></tr>
        </table>
      </td>
      <td>
        <table class="category">
          <tr><td><a>fixed</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/flat.html'>flat</a></td></tr>
          <tr><td>↳<a href='https://universaldependencies.org/ga/dep/flat-foreign.html'>flat:foreign</a></td></tr>
          <tr><td>↳<a href='https://universaldependencies.org/ga/dep/flat-name.html'>flat:name</a></td></tr>
          <tr><td><a href='https://universaldependencies.org/ga/dep/compound.html'>compound</a></td></tr>
          <tr><td>↳<a href='https://universaldependencies.org/ga/dep/compound-prt.html'>compound:prt</a></td></tr>
        </table>
    </td>
    <td>
      <table class="category">
        <tr><td><a href='https://universaldependencies.org/ga/dep/list.html'>list</a></td></tr>
        <tr><td><a href='https://universaldependencies.org/ga/dep/parataxis.html'>parataxis</a></td></tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td><a><strike>orphan</strike></a></td></tr>
        <tr><td><a><strike>goeswith</strike></a></td></tr>
        <tr><td><a><strike>reparandum</strike></a></td></tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td><a href='https://universaldependencies.org/ga/dep/punct.html'>punct</a></td></tr>
        <tr><td><a href='https://universaldependencies.org/ga/dep/root.html'>root</a></td></tr>
        <tr><td><a><strike>dep</strike></a></td></tr>
      </table>
    </td>
  </tr>
</table>



Here we summarise some of the distinctive features of Irish as a Celtic language. These features commonly occur in standard Irish use and therefore require discussion in the context of treebank development. Irish theoretical syntax is relatively under-researched, yet this summary shows that even within the limited work carried out in this area thus far, there still remain many unresolved disagreements as we show here. In general, Irish dependency treebank development follows the work of Stenson (1981).


### VSO clause structure

Both main clauses and subordinate clauses follow a VSO structure in Irish.

* _Thug sí comhairle dom_ (lit. Gave she advice to-me) "She gave me advice"
* _Dúirt siad gur chaith na daoine an airgead_ "They said that the people were seeking work"  (V S \[that V S O\])

There are only a couple of exceptional circumstances under which an element can appear between the verb and the subject (see example below) and while various elements may occur between the subject and object, such as prepositional phrases and adverbs, the verb-subject-object order is strict (Mc-Closkey, 1983, pp. 10-11).

* _Tá ar ndóigh daoine a chreideann..._ (V ADV SUBJ REL-CL) "There are of-course people who believe..."
* _Thug sé dom inné é_ (V S PP ADV O) "He gave it to me yesterday"


Irish sentences using _bí_, the Substantive Verb "to be" follow the VSO structure.  However, copular constructions using the Copula _is_ follow a Copula-Predicate-Subject order.
This is explained in more detail in [cop]().


###  Core Arguments, Oblique Arguments and Adjuncts

A nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.

An infinitive verb may serve as the subject and is labeled as clausal subject, '[csubj]()'. On the other hand, verbal nouns as subjects are just ([nsubj]()).


A finite subordinate clause may serve as the subject and is labeled '[csubj:cop]()'.

'csubj:cop' is used when the clause is a subject of a copular phrase. These are copular constructions that follow the Copula-Predicate-Subject order.
* _Ní hamháin nach bhfaca sé aon rogha eile áfach_ "it wasn't just that he didn't see any other option however"


On the other hand, '[csubj:cleft]()' is used when the clause is the subject of a clefted sentence (which also follow the Copula-Predicate-Subject order).
* _Is leabhar a thug sí dó_ "It's a book she gave him"



There are idiomatic phrases in which translations would suggest that the Irish subject is actually the object.


For example:
* _Is maith liom tae_ "I like tea" (lit. tea is good with me)


There is no passive construction in Irish, and therefore 'nsubj:pass' or 'csubj:pass' are not used in the Irish treebank. What often translates into English as passive is the automonous verb form. These verbs (labelled with the feature 'Voice=Auto' (See [Voice]()) have an "understood"/implicit subject and are usually followed directly by the object.
* _Foilsíodh an chéad chuid den sraith cartún_ "The first cartoon series was published" (lit. somebody published the first series of the cartoon)



Objects '[obj]()' in Irish may be bare noun phrases in common form (NomAcc)or prepositional phrases in common form (NomAcc). For the purpose of UD the objects are divided to core objects, labeled obj and oblique objects, labeled obl.

There are no indirect objects in Irish.


Oblique '[obl]()'. Adjuncts are usually prepositional phrases, but they can be bare noun phrases as well. They are labeled obl: * _Foilsíodh an chéad chuid den sraith cartún sa bhliain 1983_ "The first cartoon series was published in the year 1983"


The dative alternation where the prepositional construction gets a similar analysis to the double object construction
* _Thug sé litir don fhear_ "He gave a letter to the man"

Nouns can be objects of clausal complements, which are labeled [xcomp]().



If a verb subcategorizes for two core objects, one of them accusative (or [ccomp]()) and the other non-accusative, then the non-accusative object is labeled iobj. Core nominal objects in other situations are labeled just obj.


Oblique agents of verbal adjectives are labelled as 'obl'
* _go bhfuil dul chun cinn iontach déanta ag foireann shinsir..._ "that the senior team have made great progress..."  (lit. that great progress has been made by the senior team)


All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate) are adjuncts ('[nmod]()').
* _as gach ceann de na béilí seo_ "from each one of these meals"







### Clefting / Fronting

Clefting or fronting is a commonly used structure in the Irish language and described in more detail in [csubj:cleft](). Elements are fronted to predicate position to create emphasis or focus. Irish clefts differ from clefts in English in that there is more freedom with regards to the type of sentence element that can be fronted (Stenson, 1981, p.99). In Irish, the structure is as follows: Copula, followed by the fronted element (Predicate), followed by the rest of the sentence (Relative Clause). The predicate can take the form of a noun phrase (headed by pronoun, noun, verbal noun), or adjectival, prepositional or adverbial
phrases.

Nominal Fronting:
* _Is leabhar a thug sí dó_ "It's a book that she gave to him"

 Adverbial Fronting:
* _Is laistigh de bhliain a déanfar é_ "It's within a year that it will be done"

Pronoun Fronting:
* _Is ise a chonaic siad inné_ "It is she whom they saw yesterday"

Prepositional fronting:
* _Is sa pháirc a chonaic mé an gabhar_ "It's in the field I first saw the goat"

Note that in UD, the cleft particle _a_ is indistinguishable from the relative particle _a_. Both are labelled 'mark:prt' (see [mark:prt]().

Stenson (1981, p.111) describes the cleft construction as being similar to copular identity structures with the order of elements as Copula, Predicate, Subject. According to Stenson, the _a_ is a relative particle which forms part of the relative
clause. However, there is no surface head noun in the relative clause { it is missing an NP. Stenson refers to these structures as having an "understood" nominal head such as _an rud_ "the thing" or _an té_ "the person/the one", e.g. _Is ise \[an té\] a chonaic siad inné_. When the nominal head is present, it becomes a copular identity construction: She is the one who they saw yesterday. In the absence of a head noun, the verb is labelled as the head of the clause.

Note that a relative clause which is copular is considered to be clefted when it occurs as the predicate of a copular phrase.
* _Is é Michael D. Higgins ba chionsiocair leis an Roinn a bhunú sa bhliain 1992._ "Michael D. Higgins was the driving force behind the establishment of the Department in 1992."


### Pleonastic Conjunction 'ná'

The presence of the pleonastic conjunction _ná_ allows for the reordering of the copula-predicate subject structure which is rearranged to become copula-subject-conjunction-predicate.

* _Ba é an toradh a bhí ar a gcuid iarrachtaí ná bunú 'Irish Historical Studies' i 1938_ "The result of their efforts was the establishment of'Irish Historical Studies' in 1938".

In this example, we consider 'é' as an nmod, 'toradh' as a subject and 'bunú' is the root.

~~~ sdparse
ROOT Ba é an toradh a bhí ar a gcuid iarrachtaí ná bunú 'Irish Historical Studies' i 1938'. \n ROOT COP(past) The result of their efforts was the establishment of the Irish Historical Studies in 1938. 
mark:prt(bunú, ná)
cop(bunú, Ba)
root(bunú)
nsubj(bunú, toradh)
nmod(toradh, é)
acl:relcl(toradh, bhí)
~~~

### Language specific labels

The Irish UD treebank uses 26 of the UD dependency labels. A further 10 language specific labels were introduced to deal with certain linguistic phenomena in Irish:

- [acl:relcl]() for relative clauses
- [case:voc]() for vocative particles
- [compound:prt]() for verb particle heads
- [csubj:cleft]() for cleft subjects
- [csubj:cop]() for copular clausal subject
- [mark:prt]() for (most) particles
- [nmod:poss]() for possessive pronouns
- [obl:prep]() for pronominal prepositions
- [obl:tmod]() for temporal modifiers
- [xcomp:pred]() for predicates of the substantive verb "to be"



## References

Christian Brothers, 1988. New Irish Grammar, Dublin: C J Fallon

Lynn, Teresa , Ozlem Cetinoglu, Jennifer Foster, Elaine Uí Dhonnchadha, Mark Dras and Josef van Genabith, [Irish Treebanking and Parsing: A Preliminary Evaluation] (http://www.lrec-conf.org/proceedings/lrec2012/pdf/378_Paper.pdf), LREC 2012, Istanbul, May 2012

Lynn, Teresa, Jennifer Foster, Mark Dras and Elaine Uí Dhonnchadha, [Active Learning and the Irish Treebank] (http://www.alta.asn.au/events/alta2012/proceedings/pdf/U12-1005.pdf), ALTA 2012, Dunedin, NZ, December 2012

Lynn, Teresa, Jennifer Foster, Mark Dras and Josef van Genabith, [Working with a small dataset — semi-supervised dependency parsing for Irish] (http://www.nclt.dcu.ie/~tlynn/spmrl.pdf), SPMRL 2013, Seattle, USA, October 2013

Lynn, Teresa, Jennifer Foster, Mark Dras and Lamia Tounsi, [Cross-lingual Transfer Parsing for Low-Resourced Languages: An Irish Case Study] (http://www.nclt.dcu.ie/~tlynn/CLTW.pdf) CLTW 2014, Dublin, Ireland, August 2014

Teresa Lynn, [Irish Dependency Treebanking and Parsing] (http://www.nclt.dcu.ie/~tlynn/Teresa_PhDThesis_final.pdf), PhD Thesis, Dublin City University, Ireland and Macquarie University, Sydney, Australia, 2016

Lynn, Teresa and Jennifer Foster, [Universal Dependencies for Irish] (http://www.nclt.dcu.ie/~tlynn/Lynn_CLTW2016.pdf), CLTW 2016, Paris, France, July 2016

Stenson, N, 1981. Studies in Irish Syntax, Tübingen: Gunter Narr Verlag.

The Christian Brothers, New Irish Grammar, Dublin, Ireland: C.J. Fallon, March 1994

Uí Dhonnchadha, E. 2002. An Analyser and Generator for Irish Inflectional Morphology using Finite State Transducers, School of Computing, Dublin City University: Unpublished MSc Thesis.

Uí Dhonnchadha, E. 2009. Part-of-Speech Tagging and Partial Parsing for Irish using Finite-State Transducers and Constraint Grammar (PhD thesis)


---

## Treebanks

There is one Irish UD treebank:

  * [Irish-IDT](../treebanks/ga_idt/index.html)
