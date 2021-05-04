---
layout: base
title:  'Hebrew UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Hebrew <span class="flagspan"><img class="flag" src="../../flags/svg/IL.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of the exceptions follows.
* According to typographical rules, many punctuation marks are attached to the preceding space-delimited word. We always represent them as separate tokens (words); this holds even for hyphenated compounds such as בין-משרדית ‘inter-office’ (three tokens).
* Abbreviations marked with double quotation mark, such as צה”ל ‘IDF’, are not tokenized, and are considered a single token.
* Some function words in Hebrew (commonly known as משהוכלב) are attached as prefixes to the following token, but we represent them as separate tokens:
  * Oblique case markers:  ב, ל, כ, מ ( ‘of’, ‘as’, ‘to’ and ‘in’ respectively).
  * The conjunction marker ו - ‘and’
  * The definite determiner ה - ‘the’
  * The subordination marker ש - ‘that’
  * Combinations of the above. Note that not all elements are overt. The definite marker \_ה, when appearing after the case markers ב or ל, is covert e.g. בבית may be analyzed as both ‘_at home_’ -> ב\_+ה\_+בית ‘in+the+home’ and ‘_at a house_’ -> ב\_+בית ‘at+house’. As a result, there is inherent ambiguity in space-delimited tokens in Hebrew where tokens starting with \_ב or ל can carry two different analyses, with or without the definite marker.
* We also separate pronominal clitics to their lemmas in the following cases
  * Prepositions and case markers:
    שלנו ‘our’ -> של\_ + \_אנחנו  ‘_of we_’
  * Verbs inflected to mark their accusative object
    אהבתיה ‘_I loved her_’ ->   אהבתי\_  + \_את\_ + \_היא  loved+acc+her’.
  * Genitive Nouns
    ספרו ‘_his book_’ -> ספר\_ + \_של\_ + \_הוא ‘_book+of+he_’.
  To indicate in the FORM column that these case markers and pronominal in fact undergo morphological fusion in the raw text, we distinguish them from the standard pronominals and case markers using underscore at the direction of fused elements.


## Morphology

### Tags

* Hebrew uses all universal POS categories, but particles ([PART]()).
* In Hebrew, [DET]() represents definite articles (ה ‘the’), quantifiers (הרבה ‘many’), distributive determiners (כל ‘every’) and interrogatives ( אילו ‘which’). However, demonstratives  (זה ‘this’) are tagged as [PRON](). We separate possessive determiners into a possessive marker של ‘of’ which is [ADP]() and the relevant pronoun [PRON]().
* Hebrew auxiliaries ([AUX]()) are modal and aspectual expressions that combine with the bare infinitive of the main verb, such as חייב ‘must’ and יכול ‘can’. Note that modals do not constitute any uniform syntactic class in Hebrew, and there is an ongoing debate as to the POS of each modal expression. The various inflections of the היה ‘be’ verb with respect to gender, person, negation and tense (only past and future) are also tagged as [AUX]().
* Existential markers, either present tense יש\אין or past/future inflections of the היה ‘be’ verb, are tagged as [VERB]().
* Participles in Hebrew are formed as present tense verbs and they are used as either nouns ([NOUN]()), or modals ([AUX]()). Note that deverbal expressions (whether nouns or adjectives) are tagged as ([VERB]()) when they are complemented, but as ([NOUN]()) or ([ADJ]()) when they are not.


### Features

* [Abbr](): The Abbreviation feature (Abbr=Yes) may be marked for [NOUN]() (ח”כ ‘Knesset member’), [PROPN]() (ארה”ב ‘United States’), [ADJ]() (ז”ל ‘R.I.P’) and [ADP]() (ע”י ‘by’).
* [Case](): has possible values of Acc, Gen and Tem. Gen and Acc mark accusative and genitive prepositions ([ADP]()) respectively. When a pronoun is segmented into its basic lemmas (e.g. אותנו -> את_ + _אנחנו) the Case=Acc feature accompanies the case marker את. Temporal case (Tem) in Hebrew appears in temporal subordination כש ‘when (+clause)’, whose POS tag is [SCONJ]().
* [Definite](): The Definiteness feature has two values: Def and Cons, for definite and for construct states respectively. The feature Definite=cons marks nouns ([NOUN]()), determiners ([DET]()), verbs ([VERB]()), numerals ([NUM]()) and adjectives ([ADJ]()) that act as the first token in a construct-state construction (מבנה סמיכות), and they mark the resulting construct-state NP as inherently definite (i.e., not requiring an overt ה definite marker). Definite=Def also marks instances of pronouns which express similarity (e.g. אנשים במרכז אותה תנועה).
* [Gender](): All nominal words ([NOUN](), [PROPN]() and [PRON]()) in Hebrew have a grammatical Gender: either feminine (Fem) or masculine (Masc). The following parts of speech also inflect for Gender because they must agree with nouns: [ADJ](), [VERB](), [AUX]() and [NUM](). Nouns and verbs which are underspecified for gender are marked Gender=Fem,Masc.
* [HebBinyan](): Hebrew has a morphological system of root+binyan conjugation that conveys agency (simple, intensive or causative) and voice (active passive, or middle/reflexive) in verbs ([VERB]()).
* HebExistential: marked as true if given to existential verbs ([VERB]()) יש ‘there is’ or אין ‘there is no’ or past/future inflections such as היה ‘there was’ תהיה ‘there will be’.
* [Mood](): the value Imp marks imperative verb forms.
* [Number](): The values for Number can be: sing (singular), plur (plural), dual for a couple (שנתיים  ‘two years’, as opposed to שנים ‘years’), or dual,plur for items which only have a dual form and no plural form (hence it is not necessarily two - could be more, e.g. שוליים ‘margins’).  The following parts of speech also inflect for number (either singular or plural) because they must agree with nouns:  [ADJ](), [DET](), [VERB](), [AUX](), where dual and plural inflect the same way.
* [Person](): Finite verbs ([VERB]() or [AUX]()) and pronouns ([PRON]()) are marked for 1, 2 or 3 person in the case of  first, second and third person respectively. Verbs are also marked , or Person=1,2,3 when on the case of  lemmas unspecified for person (for example in present tense).
* [Polarity](): neg or pos are given to copular verbs according to their polarity (negative/positive).
* [Prefix](): Yes is given to non-standalone adverbials ([ADV]()) which are either loan prefixes (e.g. מולטי ‘multi’, אנטי ‘anti’ etc.) or Hebrew adverbials with the same function (e.g. בלתי, אי ‘non’).
* [PronType](): relevant for pronouns ([PRON]()) and determiners ([DET]()). PronType can take the following values: Prs for personal pronouns (e.g. אתה ‘you’, היא ‘she’ etc), Dem for demonstrative pronouns ( זה ‘it’, ‘this’), Int for interrogative pronouns (אילו ‘which ones’ מיהו ‘who’), and Ind for indefinite pronouns (e.g איכשהו, מישהו somehow, someone). When describing determiners, PronType can be either Art for articles (in hebrew there is a definite article ה\_ ‘the’), or Int for interrogative determiners (מי, כיצד, האם, ‘who’, ‘how’ ‘whether’ respectively). Note that in Hebrew האם ‘whether’ can also appear in the matrix clause.
* [Reflex](): [PRON]() can take a Reflex=Yes feature that indicates  reflexivity (e.g. עצמי ‘myself’).
* [Tense](): marks a [VERB]() when it is either Past or Fut (future). Present tense is not explicitly marked with this particular feature.
* [VerbForm](): marks a verb if it is either in infinitive form (inf) or participle (part).
* [VerbType]()=Mod is given to modal auxiliaries ([AUX]()) and VerbType=Cop is given to copular auxiliaries.
* [Voice](): can be either for active (act), passive (pass) or unaccusative (mid) verb forms.
* HebSource: This feature can mark any category and accepts the values ConvUncertainHead or ConvUncertainLabel to indicate that the head or label information for this token, respectively, is based on unreliable information detected in the automatic conversion process. In UD v2.8, this attribute is moved from FEATS to MISC.

## Syntax

### Word Order

The canonical word order in Hebrew is SVO. However, this generalization is flexible, as accusative and oblique case marking allow free order with respect to subject, verb and objects. Furthermore, there are various specific constructions in which different word orders are more common (מחר יגיע אורח ‘tomorrow will arrive a guest’ is more in use than מחר אורח יגיע ‘tomorrow a guest will arrive’ though both are perfectly grammatical). In other constructions the SVO word order is ungrammatical, such as the Hebrew existential construction which surfaces as VOS (יש לו המיומנות הנחוצה להיות מושל).

### Subjects and other Arguments

Subjects are labeled [nsubj]() and have the following characteristics:
* Case marking: Subjects occur in nominative case without adpositions.
* A clause is labeled [csubj]() when it serves as the subject of its matrix clause. Participles are tagged [nsubj]() when they serve as subjects of the clause:
  המגדל נחש בביתו, אל יופתע אם ימצא עצמו מוכש
  Whoever raises a snake at home should not be surprised if stung.

Arguments have the following characteristics:
* Case marking: Arguments defined in the Hebrew grammar may be bare noun phrases in accusative, or prepositional phrases in accusative, dative, oblique or genitive. In Hebrew, arguments additional to direct object are always prepositional phrases. Hence, direct objects are labeled [obj](), and prepositional phrases are marked [obl](), whether they are core arguments or adjuncts.
* Passivization: Objects become subjects when verbs are passivized. In accordance with v2, they are labeled [nsubj]().
* If a verb subcategorizes for the infinitive (e.g. phrasal verbs or verbs of control), the infinitival complement is labeled xcomp.

Non-verbal Clauses
* The copular verb להיות ‘be’ is used in attributional, locative and possessive nonverbal clauses when either non-finite or inflected to
  past/future. Hebrew allows for demonstrative determiners to serve as copulas as well, e.g. שוקולד זה טעים ‘chocolate is tasty’.
* In equational clauses the copular verb may appear also with inflection to present tense הילד הזה הוא אני ‘this boy is me.’
* Existential clauses use a different lemma, יש ‘give’ with an accusative object: יש אוכל ‘there is food.’

### Relations Overview

* The following relation subtypes are used in Hebrew:
  * [acl:relcl]() for the head of a relative clause
  * [case:acc]() for an accusative case marker
  * [case:gen]() for a genitive case marker
  * [compound:affix]() non-standalone yet orthographically separated lemmas, largely originated as loan affixes (אנטי וירוס ‘antivirus’) but not only (e.g. בלתי הפיך ‘irreversible’).
  * [compound:smixut]() for a noun modifying another noun in a construct state.
  * [flat:name]() for the second part of a complex name
  * [mark:q]() for yes-no interrogative clause markers (either matrix or subordinate).
  * [nmod:poss]() for a covert pronoun in a genitive construction
  * [nsubj]():[cop]() for the subject of a copular sentence. The copular verb in Hebrew is optional. Consequently, the only way to retrieve copular sentences is by their only obligatory element, which is the subject.

* The following main types are not used alone and must be subtyped: [compound](), [flat]()
* The following relation types are not used in Hebrew at all: [clf](), [expl]().

## Treebanks

Currently, Hebrew has a single treebank:
* [Hebrew HTB](http://universaldependencies.org/treebanks/he_htb/index.html)

