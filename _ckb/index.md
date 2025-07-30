---
layout: base
title:  'Central Kurdish UD'
udver: '2'
---

# UD for Central Kurdish <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-KRD.svg" /></span>

## Tokenization and Word Segmentation


layout: base title: 'Central Kurdish UD' udver: '2'
UD for Central Kurdish <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-KRD.svg" /></span>
Tokenization and Word Segmentation

Whitespace and punctuation: Words are generally delimited by whitespace and punctuation marks following standard conventions. The tokenization process identifies word boundaries based on standard orthographic principles of the Kurdish Roman alphabet script. Sentence boundaries are marked by standard punctuation marks including periods, question marks, and exclamation points.

Multiword tokens: The treebank extensively uses multiword tokens that represent single orthographic units but contain multiple grammatical elements. These are represented as single tokens in the surface form but are expanded into multiple syntactic words in the .conllu format. Common multiword token patterns include:

    Contracted noun-pronoun forms: meseleyēkit → meseleyēk (an issue) + it (your), where possessive pronouns are attached to nouns
    Prepositional contractions: Lew → L (preposition) + ew (determiner), where prepositions merge with following determiners
    Reflexive constructions: xoy → xo (reflexive particle) + y (pronoun), where reflexive markers combine with pronominal elements
    Numeral combinations: yēkmān → yēk (one) + mān (our), where numerals combine with possessive pronouns

Clitics and enclitics: Central Kurdish frequently attaches various grammatical elements to lexical words as clitics. These are systematically segmented as separate syntactic tokens in the annotation:

    Pronominal clitics: Personal pronouns that attach to verbs, nouns, or prepositions
    Case markers: Oblique and other case markers that may appear as suffixes
    Reflexive markers: The reflexive particle xo and its variants when attached to other elements
    Coordinative particles: Elements like ū (and) when they appear as clitics

Special symbols and editorial marks: The original text contains editorial annotations marked with curly braces {} and hash symbols # that indicate corrections, uncertain readings, or editorial comments. These symbols are preserved in the MISC column for transparency but are handled appropriately during preprocessing to maintain clean linguistic analysis.

Compound and complex word formation: The treebank handles various types of morphologically complex words, including compound nouns, complex predicates, and derivational formations, with careful attention to maintaining both surface representation and underlying grammatical structure.


## Morphology

### Tags

Universal POS coverage: The treebank employs all major categories from the Universal POS tagset, with careful attention to language-specific distributional patterns and grammatical functions within Central Kurdish.
PART (Particle): The PART tag covers a diverse range of functional elements that serve various grammatical and discourse functions:

Discourse particles: yānī (meaning, that is to say) used for clarification and explanation
Vocative particles: Dā and similar elements used in direct address
Reflexive particles: xo (self) and its variants used in reflexive constructions
Coordinative particles: ū (and), w (and) used for coordination at various syntactic levels
Modal particles: bā (let's, should) expressing modality and volition
Negation particles: ne (not) used for clausal and constituent negation
Focus and emphasis particles: Various elements that mark information structure

AUX vs VERB distinction:

AUX (Auxiliary): Reserved for copular verbs like e (is/are), te (you are), and other auxiliary constructions that serve primarily grammatical functions. These include existential constructions, progressive markers, and modal auxiliaries
VERB: Covers all lexical verbs including main predicates, light verbs in complex predicates, and verbal elements that carry primary semantic content. This includes both simple verbs and the verbal component of light verb constructions

DET vs PRON distinction:

DET (Determiner): Used for elements like ew/ewe (the) when they function as definite articles or demonstrative determiners modifying nouns directly. Also includes other determinative elements that specify reference
PRON (Pronoun): Covers personal pronouns in argument positions, demonstrative pronouns used independently, interrogative pronouns, and relative pronouns. The distinction is based on syntactic distribution rather than morphological form

ADJ, ADV, and deverbal forms: Participles, verbal nouns, and other deverbal formations are tagged based on their syntactic function in context:

ADJ: When deverbal forms modify nouns or serve as predicative adjectives
ADV: When they modify verbs, adjectives, or clauses
NOUN: When they function as arguments or nominal predicates
This functional approach captures the versatile nature of deverbal morphology in Central Kurdish.

CCONJ, SCONJ, INTJ: Coordinators (CCONJ) are distinguished from subordinators (SCONJ) based on the syntactic relationship they establish. Interjections (INTJ) cover exclamatory and expressive elements that stand outside regular syntactic structure.

### Features

NNOUN features:

Number: Sing (singular) and Plur (plural) distinguish basic number categories. Plural formation in Central Kurdish involves various morphological processes including suffixation and stem alternation
Definite: A three-way distinction captures Kurdish definiteness system:

Def (definite): Marked definite nouns with -eke suffix or determiner agreement
Ind (indefinite): Unmarked or explicitly indefinite nouns
Spec (specific): Specific but not definite reference, capturing the intermediate category in Kurdish definiteness


Person: Applied to nouns in possessive constructions, particularly frequent with kinship terms and body parts where possessive marking is morphologically integrated (e.g., "mother-my", "hand-his")
Case: Various case markings including oblique, genitive, and others as relevant to specific constructions

VERB features:

VerbForm: Fin (finite) for tensed main verbs vs Inf (infinitive) for non-finite forms used in various constructions
Mood:

Ind (indicative): Default mood for factual statements
Sub (subjunctive): Used in conditional, optative, and subordinate contexts
Imp (imperative): Direct commands and requests


Tense: Pres (present) vs Past (past) captures the basic temporal distinction, with additional aspectual information encoded separately
Person and Number: Full agreement paradigm (1, 2, 3 × Sing, Plur) reflecting subject-verb agreement patterns
Voice: Act (active) vs Pass (passive) for constructions where passive morphology is evident
Aspect: Imp (imperfective) marked on certain past forms that emphasize ongoing or habitual action

Pronoun features:

Person and Number: Complete paradigm matching verbal agreement (1, 2, 3 × Sing, Plur)
Reflex: Yes for reflexive pronouns that refer back to the subject of their clause, including both simple reflexives and complex reflexive constructions
Case: Various case forms depending on syntactic position and construction type

Determiner and demonstrative features:

Definite: Marking definiteness value carried by determiners
Deixis: For demonstratives, marking proximal vs distal distinction where relevant

Extended POS (ExtPos): Used when words exhibit syntactic behavior different from their morphological category, particularly common with:

Nouns functioning as postpositions in construction with case-marked complements
Adjectives serving determiner-like functions
Complex functional categories that span traditional POS boundaries



## Syntax

Core arguments and alignment:

nsubj (nominal subject): Marks the subject of finite clauses. In Central Kurdish, subjects show ergative alignment in past transitive constructions, where the logical subject may bear oblique case marking while the object appears in direct case
obj (direct object): Direct objects in transitive constructions, including both definite and indefinite objects. Object marking interacts with definiteness and information structure
iobj (indirect object): Typically benefactive or recipient arguments, often marked with specific case morphology or prepositional phrases
obl (oblique): Covers a wide range of adjunct and oblique core arguments including:

Locational arguments (spatial and temporal)
Instrumental phrases
Comitative constructions
Ergative subjects in past transitive constructions
Various prepositional phrase types



Ergative alignment patterns: In past tense transitive constructions, Central Kurdish exhibits ergative alignment where:

The agent (logical subject) appears in oblique case and may be marked with obl relation
The patient (logical object) appears in direct case and is marked as nsubj
Verb agreement follows an ergative pattern
This represents one of the most complex aspects of Kurdish syntax reflected in the dependency annotation.

Copula constructions:

Simple copular clauses: Use forms of the copula e (is/are) to link subjects with nominal, adjectival, or prepositional predicates. The copula serves as the syntactic head with cop relation
Zero copula: In present tense contexts, the copula can be omitted, resulting in juxtaposition of subject and predicate with appropriate dependency relations
Existential constructions: Special copular patterns for expressing existence and location
Complex copular constructions: Including cleft constructions and focus-marked copular sentences

Light verb constructions (LVC):

compound:lvc: Extensively used for the very common light verb constructions in Central Kurdish, where a nominal or adjectival element combines with a semantically light verb:

"decision take" (decide)
"work do" (work)
"help give" (help)


These constructions are treated as single predicative units with the light verb as syntactic head and the nominal/adjectival component linked via compound:lvc

Modification relations:

nmod:poss (possessive nominal modifier): Possessive constructions including both morphological possession (suffixed pronouns) and syntactic possession (genitive constructions)
amod (adjectival modifier): Attributive adjectives, including both simple adjectives and participial modifiers
acl:relcl (relative clause): Relative clauses, which in Central Kurdish may show various structural patterns including correlative constructions
nmod (nominal modifier): Various other types of nominal modification including appositional and descriptive relations

Clausal relations:

ccomp (clausal complement): Complement clauses including both finite and non-finite complements
advcl (adverbial clause): Various types of subordinate clauses including temporal, conditional, causal, and concessive clauses
csubj (clausal subject): Subject clauses, though less common than other clausal relations

Coordination:

conj (conjunct): Links coordinated elements at various levels (word, phrase, clause)
cc (coordinating conjunction): Marks coordinators like ū (and), yā (or), bellam/lē (but)

Special syntactic patterns:

Complex predicate formation: Beyond simple LVCs, various patterns of complex predication including serial verb constructions
Information structure: Dependency relations reflect topicalization, focusing, and other information structure phenomena
Case attraction and agreement: Complex patterns of case marking and agreement that interact with syntactic relations
Incorporation phenomena: Various types of noun incorporation and complex word formation that affect syntactic analysis


## Treebanks

There are 1 (../treebanks/ckb-comparison.html) Central Kurdish UD treebank:

  * [Central Kurdish-Mukri](../treebanks/ckb_mukri/index.html)

This treebank represents the Mukri dialect of Central Kurdish (Sorani variety) and uses Roman alphabet transcription. The data consists of manually annotated sentences that provide comprehensive morphological and syntactic analysis following Universal Dependencies guidelines. The current release focuses on providing high-quality, consistent annotation that captures the distinctive features of Central Kurdish grammar while maintaining cross-linguistic comparability through the UD framework.
The treebank serves as a valuable resource for Central Kurdish language processing, typological research, and comparative studies within the Kurdish language family and broader Indo-European context. All annotations have been manually reviewed and verified for consistency, with ongoing development planned for future releases to expand coverage and refine analytical decisions.
