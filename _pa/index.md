---
layout: base
title:  'Punjabi UD'
udver: '2'
---

# UD for Punjabi <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* Compounds with hyphens are split.
* Form and lemma of each token is mentioned. In many cases, form and the lemma are same (including punctuations).
* Some clitic postpositions have an apostrophe at the beginning and may be written merged with the previous word (e.g. 'ਚ "in", 'ਤੇ "on", 'ਚੋਂ "from in"). They are tokenized separately and tagged [ADP]().
* Parentheses and brackets are tokenized as punctuation and attached with punct to the nearest relevant head, often the predicate of the main clause.

## Morphology

### Universal Parts of Speech (UPOS)

* The following 15 UPOS tags are used:
  * `ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB`

### Tags

* Aspectual light (vector) verbs are tagged [VERB]() since they take full inflectional paradigms. They attach to the main verb as [compound:svc](), e.g. ਕਰ ਦਿੱਤਾ, ਲੈ ਲਿਆ, ਹੋ ਚੁੱਕੀਆਂ, ਹੱਸਣ ਲੱਗ ਪਏ.
  * Pay special attention to ਜਾਣਾ "to go", which is usually [VERB]() (including as the completive light verb, e.g. ਹੋ ਗਈ "happened", ਬੈਠ ਗਿਆ "sat down") but [AUX]() if it is passivising a verb, i.e. after a perfective participle (ਕੀਤਾ ਗਿਆ "was done", ਮੰਨੀ ਜਾਂਦੀ "is considered").
* The following lemmas are used as [AUX]():

| Lemma | Function | Example |
|---|---|---|
| ਹੈ | copula; present tense | ਉਹ ਖਾਣਾ ਖਾ ਰਿਹਾ [ਹੈ] |
| ਸੀ | copula; past tense | ਆਤਸ਼ਬਾਜ਼ੀਆਂ ਚੱਲ ਰਹੀਆਂ [ਸਨ] |
| ਹੋਣਾ | perfect / resultative and subjunctive | ਮੈਂ ਨੁੱਕਰ ਵਿਚ ਬੈਠਾ [ਹੋਇਆ] ਸਾਂ; ਕੋਈ ਅਜਨਬੀ ਪਹੁੰਚਿਆ [ਹੋਵੇ] |
| ਰਹਿਣਾ | progressive | ਉਹ ਖਾਣਾ ਖਾ [ਰਿਹਾ] ਹੈ |
| ਜਾਣਾ | passive | ਚਿੱਠੀ ਲਿਖੀ [ਗਈ] |
| ਕਰਨਾ | habitual (after the invariant perfective participle in -ਆ) | ਉਹ ਹਰ ਰੋਜ਼ ਆਇਆ [ਕਰਦਾ] ਸੀ |
| ਸਕਣਾ | potential | ਦੇਖ [ਸਕਦੇ] ਸੀ |
| ਪੈਣਾ | necessitative | ਬੈਠਣਾ [ਪਵੇਗਾ] |
| ਚਾਹੀਦਾ | necessitative | ਮਦਦ ਕਰਨੀ [ਚਾਹੀਦੀ] ਹੈ |

  * The same lemmas are tagged [VERB]() in their lexical meaning, e.g. ਮੈਂ ਪਿੰਡ ਵਿੱਚ ਰਹਿੰਦਾ ਹਾਂ "I live in the village", ਉਹ ਘਰ ਗਿਆ "he went home", ਉਹ ਕੰਮ ਕਰਦਾ ਹੈ "he does work".
  * This inventory follows the closely related Hindi and Urdu UD treebanks, which treat the same constructions as auxiliaries: है/था and ہے/تھا for the copula and tense, होना/ہونا, रहना/رہنا for the progressive, जाना/جانا for the passive, करना/کرنا for the habitual, and सकना/سکنا, पड़ना/پڑنا, चाहिए/چاہیے for modality. As in those treebanks, vector verbs such as देना, लेना (ਦੇਣਾ, ਲੈਣਾ) and completive जाना (ਜਾਣਾ) are not auxiliaries but [VERB]().
* Copular 'ਹੈ' is tagged AUX and used as COP with nominal or adjectival predicates, where the predicate is the root. For example 'ਇਹ ਸੀ ਅਜਗਰ ਦਾ ਬਾਹਰਲਾ ਚਿੱਤਰ।' (lemma: ਸੀ), where 'ਚਿੱਤਰ' is the root and 'ਸੀ' is COP. Only forms of "to be" are copulas; ਹੋਣਾ "to become" (e.g. ਪੈਦਾ ਹੋਈ "came into being") is the main verb.
* The same lemmas 'ਹੈ' and 'ਸੀ' are tagged AUX when the main predicate is verbal.
* Negation like 'ਨਾ / ਨਹੀਂ' is tagged PART and often attaches as advmod to the predicate.
* Postpositions (ਨੂੰ, ਨੇ, ਦਾ, ਵਿੱਚ, ਨਾਲ, ਤੋਂ, ਦੁਆਲੇ, ਅੰਦਰ, ਵਿੱਚੋਂ, …) are tagged [ADP](), including the ergative marker ਨੇ.
* The nominal part of a light-verb construction keeps its own category: [NOUN]() (ਨਾਚ ਕੀਤਾ "danced", ਨਜ਼ਰ ਆਉਣਾ "to appear") or [ADJ]() (ਦਾਖਲ ਹੋਇਆ "entered", ਬੰਦ ਸਨ "were closed").
* The oblique infinitive (ਕਰਨ, ਦੇਖਣ, ਖਾਣ) is tagged [VERB](), also when it modifies a noun (ਖਾਣ ਦਾ ਕਮਰਾ "dining room").
* Interrogative words (ਕੌਣ / ਕਿਸ, ਕੀ, ਕਿਹੜਾ, ਕਿੰਨਾ, ਕਾਹਦਾ, ਕਿਹੋ) are tagged [PRON]() or [DET]() with PronType=Int.

### Lemmas

* Verbs (including auxiliaries other than 'ਹੈ' and 'ਸੀ') are lemmatized to the infinitive in -ਣਾ / -ਨਾ, e.g. ਗਿਆ → ਜਾਣਾ, ਰਿਹਾ → ਰਹਿਣਾ, ਸਕਦਾ → ਸਕਣਾ.
* Forms of "to be": present tense ਹੈ, ਹਨ, ਹਾਂ, ਹੋ, ਏ, ਐ (and colloquial ਨੇ) → ਹੈ; past tense ਸੀ, ਸਨ, ਸਾਂ → ਸੀ; all other forms (ਹੋਇਆ, ਹੁੰਦਾ, ਹੋਵੇ, ਹੋਵੇਗਾ, ਹੋਣ) → ਹੋਣਾ.
* Nouns and adjectives are lemmatized to the direct singular; inflecting adjectives to the masculine form (ਤਿੱਖੀ → ਤਿੱਖਾ).
* Each token has exactly one lemma.

### Features

Nominal and Verbal inflections are listed in the table below:

| Universal Feature | Feature   | Observed |
|---|---|---|
| Nominal | Case     | Abl, Acc, Nom |
| Nominal | Degree   | Pos |
| Nominal | Gender   | Fem, Masc |
| Nominal | Number   | Plur, Sing |
| Nominal | NumType  | Card |
| Nominal | Person   | 1, 2, 3 |
| Nominal | Poss     | Yes |
| Nominal | PronType | Dem, Ind, Int, Prs, Rel |
| Nominal | Reflex   | Yes |
| Verbal  | Aspect   | Imp, Perf |
| Verbal  | Mood     | Imp, Ind |
| Verbal  | Tense    | Fut, Past, Pres |
| Verbal  | VerbForm | Conv, Fin, Inf, Part |
| Other   | ExtPos   | ADV, PRON, SCONJ |

* Case: Nom marks the direct form; Acc marks the oblique form, i.e. a noun followed by a postposition (ਘਰ ਦੇ, ਹੱਥਾਂ ਵਾਲੇ); Abl marks the synthetic ablative in -ੋਂ (ਘਰੋਂ, ਬਾਹੋਂ). The ergative is expressed by the postposition ਨੇ, which carries no Case feature; the noun before it is Case=Acc.
* Gender has two values only (Masc, Fem); Punjabi has no neuter.
* Nouns, proper nouns and inflecting adjectives carry Case, Gender and Number. Attributive adjectives agree with their noun; invariant predicative adjectives (ਬੰਦ, ਸ਼ਾਂਤ, ਮੌਜੂਦ) carry Degree=Pos.
* Pronouns carry Case, Number, Person and PronType; possessive pronouns (ਉਸਦਾ, ਮੇਰਾ, ਸਾਡਾ) add Poss=Yes, reflexive ਆਪਣਾ adds Reflex=Yes. Determiners carry PronType only.
* Verbs:
  * imperfective participles in -ਦਾ: Aspect=Imp|Gender|Number|VerbForm=Part (ਬੋਲਦੀ);
  * perfective participles in -ਿਆ: Aspect=Perf|Gender|Number|VerbForm=Part (ਕੀਤਾ, ਗਈਆਂ);
  * infinitives: VerbForm=Inf; the oblique infinitive before a postposition also carries Case=Acc (ਕਰਨ ਲਈ);
  * converbs with ਕੇ: VerbForm=Conv (ਦੇਖ ਕੇ);
  * future and imperative forms: Mood, Number, Person, Tense, VerbForm=Fin (ਕਰਾਂਗੀ, ਰੁਕੋ);
  * subjunctive forms carry Number and Person only (ਕਰੇ, ਦੇਵੇ), since Mood=Sub is not used;
  * bare verb stems in compound verbs (ਕਰ in ਕਰ ਦਿੱਤਾ) carry no features.
* ExtPos is given on the head of fixed expressions: ਇਸ ਲਈ "therefore" (ExtPos=ADV), ਏਥੋਂ ਤੱਕ "even" (ExtPos=ADV), ਬਾਵਜੂਦ ਇਸਦੇ ਕਿ "despite the fact that" (ExtPos=SCONJ).
* The features AdpType, Polarity, Voice and Foreign are not used.


## Syntax

### Dependency Relations

The treebank uses the following dependency relations:

| Relation type | Observed relations |
|---|---|
| Core clausal | root, nsubj, nsubj:pass, obj, iobj, cop, aux, aux:pass, ccomp, xcomp |
| Adverbial | advcl, advmod, advmod:emph, mark |
| Oblique | obl, obl:agent, obl:arg, obl:tmod |
| Nominal modifiers | appos, amod, acl, acl:relcl, nmod, nmod:poss, nmod:tmod, nummod, case, det, det:poss |
| Coordination and punctuation | cc, conj, punct |
| Compounds and multiword expressions | compound, compound:lvc, compound:redup, compound:svc, fixed, flat |
| Other | discourse, dislocated, orphan, parataxis, vocative |

Core arguments and obliques:

- nsubj, obj, and iobj are used for core arguments.
- A verb has at most one nsubj and one obj. A subject resumed by a pronoun (ਮਾਲਕ … ਉਸ ਨੇ) is attached as dislocated.
- Oblique dependents of a verb are obl; dependents of a noun with a postposition are nmod (ਦਿਆਨਤਦਾਰੀ ਤੇ ਯਕੀਨ "trust in honesty").
- The agent of a passive with ਦੁਆਰਾ "by" is obl:agent.

Nominal modification:

- amod, nmod, nmod:poss, det, nummod,
- acl relation is used for clausal modifiers.
- The indefinite ਇੱਕ / ਇਕ "a, one" is tagged DET with det; as a numeral it is NUM with nummod.

Adverbials and subordination:

- Word-level adverbials are related using advmod.
- ਜਦੋਂ "when" and ਜਿਵੇਂ "as" used as clause-level adverbs are tagged ADV with advmod.

Complementation:

- For finite clausal complements ccomp is used and for open complements xcomp is used.

Light and serial verbs:

- Light-verb constructions: the NOUN or ADJ part attaches to the light verb (ਕਰਨਾ, ਹੋਣਾ, ਦੇਣਾ, ਆਉਣਾ, …) as compound:lvc, and the light verb is the head of the clause, e.g. ਨਾਚ ਕੀਤਾ "danced", ਦਾਖਲ ਹੋਇਆ "entered", ਜੁਆਬ ਦਿੱਤਾ "replied".
- Serial-verb and vector-verb constructions are represented using the relationship compound:svc, with the first (main) verb as head.

Coordination, names and fixed expressions:

- The first conjunct is the head of a coordination; the other conjuncts attach to it as conj, and cc and commas attach to the conjunct that follows them.
- In gapping, the first remnant is promoted to head and the remaining arguments attach as orphan (ਆਂਟ ਹੈਲੇਨ ਇੱਕ ਅੜਾਉਣੀ, ਆਂਟ ਸਟੈਫਨੀ ਇੱਕ ਬਰੋਚ … ਲੈ ਕੇ ਆਈ).
- Multiword names are flat, with the first word as head; case markers attach to that head.
- Reduplication is compound:redup with the first word as head (ਵੱਡੇ ਵੱਡੇ, ਸਮੇਂ ਸਮੇਂ, ਡੌਰ ਭੌਰ).
- Fixed expressions (ਇਸ ਲਈ, ਏਥੋਂ ਤੱਕ, ਬਾਵਜੂਦ ਇਸਦੇ ਕਿ) use fixed with the first word as head.

* Special relations:
  * [acl:relcl]() for relative adnominal clauses. These have to have a relative pronoun in them (otherwise just [acl]()).
  * [aux:pass]() for the passive auxiliary ਜਾਣਾ.
  * [compound:lvc]() for noun/adjective + light verb constructions.
  * [compound:svc]() for aspectual light (vector) verbs.
  * [compound:redup]() for reduplicated words.
  * [nsubj:pass]() for passivized subjects.
  * [obl:agent]() for the agent of a passive (ਦੁਆਰਾ "by").
  * [dislocated]() for a fronted nominal resumed by a pronoun.

## Treebanks

There are [4](../treebanks/pa-comparison.html) Punjabi UD treebanks:

  * [Punjabi-DYZ](../treebanks/pa_dyz/index.html)
  * [Punjabi-PunTB](../treebanks/pa_puntb/index.html)
  * [Punjabi-CS](../treebanks/pa_cs/index.html)
  * [Punjabi-Rang](../treebanks/pa_rang/index.html)
