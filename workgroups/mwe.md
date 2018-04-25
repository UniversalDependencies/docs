---
layout: base
title:  'Working Group on Multiword Expressions'
udver: '2'
---

# Working Group on Multiword Expressions

## MWE in UD

The purpose of this page is to serve as a basis for discussion for the improvement of multi-word annotation in UD.

UD is a syntactic annotation scheme. Thus, **these three relations should encode syntactically problematic constructions that cannot be analyzed by other "regular" dependency relations**. The objective of a syntactic annotation scheme is not primarily to encode idioms and named entities.

### Proposals for the MWE relations `fixed`, `flat`, and `compound`:

Fixed should be used for syntactically irregular constructions. Flat and Compound are used for productive constructions corresponding to syntactic sub-systems. Flat should be reserved for `flat` constructions, i.e. constructions where a head cannot be determined. And Compound should be used for very cohesive constructions, neighboring morphology.

The current definitions of the three relations are problematic or not applied consistently:

* The definition of the `fixed` relation states that `fixed` constructions "do not have any internal syntactic structure (except from a historical perspective)" and that their structural annotation would be "in principle arbitrary". Currently `fixed` is used for quite many idioms with the role of function words or short adverbials even when they clearly have an internal regular structure ("on top of", "à côté de"). **Joakim:** The notion of regular vs. irregular structure is not clear-cut. For example, "on top of" contains a determinerless prepositional phrase, which is not a regular structure in English. Compare: "the book is on table".

* Following the definition, `compound` should be used for "any kind of X0 compounding" (which seems quite circular and cryptic) and lists a few examples: noun-noun compounds, verb-particles, serial verbs and, strangely enough, light-verb constructions in Persian and Japanese.

* The definition of `flat` states that it should be used for "exocentric (headless) semi-fixed MWEs", while it is not clear what "semi-fixed" means. It is used for many constructions where it seems straightforward to determine a head, such as "President Obama", where Obama can be used alone instead of the whole construction, but not President. President Obama went to Paris. Obama went to Paris. \*President went to Paris.

All syntactically regular constructions should receive a normal compositional analysis. Their idiomatic status can be annotated on a different level of (semantic) annotation. This includes semantically compositional (_the dog slept_), semi-compositional (_[wide] awake, [heavy] smoker, rain [cats and dogs]_), and semantically non-compositional constructions (_kick the bucket, green card, cats and dogs, in the light (of), Fr. pomme de terre &#39;potato&#39;_). See the article Kahane, Courtin, Gerdes "[Multi-word annotation in syntactic treebanks](http://www.anthology.aclweb.org/W/W17/W17-7622.pdf)", TLT 2018 for a detailed definition of the terms.

Constraining more precisely the extent of headless and irregular relations is generally expected to lead to a much smaller set of constructions using `flat`, `compound`, or `fixed`. A mainly syntactic definition will also make the semantic extent of the usage of these relations more variable among languages: We cannot expect, for example, that all person or organization names will syntactically behave the same in different languages.

In addition to the more precise definition, we also have to make proposals on how to preserve previously annotated units of MWE. Here we explore to which extent some basic non-embedded structures can be expressed using the dual MWEPOS/INMWE features, that will be presented below (see thread https://github.com/bguil/UD-French-discussion/issues/16 for a discussion in French on the feature names).

## Headless structures

Both the `flat` and the `fixed` relation are used for headless (=flat) constructions, i.e. when no head can be determined. A construction AB is headless if either both A and B can replace AB or neither A nor B can replace AB – both cases will be described separately below. Headless constructions are annotated in one arbitrary but `fixed` style. UD chooses the bouquet style, i.e. all words depend on the first word.

If, however, AB can be replaced only by A, A is the head; if AB can be replaced only by B, B is the head. Then the construction is headed and the relation between A and B is not `flat` or `fixed`.

### Case N: neither A nor B can replace AB:

He reads El Païs. \*He reads El. \*He reads Païs.

Idem for "ad hoc" and "parce que"

We will determine below which relation, `flat` or `fixed`, should be used in these cases.

This case should be considered as default also if the annotator just does not know whether this substitution is possible because the text is in a foreign language, for example.

### Case B: both A and B can replace AB:

Note that this description also fits to appos relations. We will have to provide criteria to distinguish when `flat`, `fixed`, or appos should be used.

For "Hillary Clinton", both parts can replace the whole. Thus, we cannot determine a head. Note that we can not permute the tokens: \*Clinton Hillary

"the president Obama" can be replaced by "the president" and by "Obama". Again, we cannot determine a head. This time we can permute word order: Obama, the president.

However, "Mister Miller" can be replaced by Miller and not by Mister (Mister can only be used alone as a vocative). It&#39;s a headed construction Mister ← Miller. Cf. the section on compounds for noun-noun constructions in English. The same holds for "President Obama" and "French actor Gaspard Ulliel".

## Which relation names for headless constructions?

Headless constructions always have a bouquet structure. But when to use `flat`, `fixed`, and appos?

We propose:

If a headless construction...

1. has a permutable word order (and case B), we use **appos**.
2. designates as a whole a proper noun, i.e. we would like to give it PROPN as POS, we use **`flat`**. A test could include whether the sentence remains grammatical if the construction is replaced by a single proper noun. Depending on the language, this might also include dates and addresses. This does by no means imply that all proper nouns, dates, or addresses should be `flat`. They should be `flat` if and only if they are also headless. Question: maybe include POS NOUN for oran utang?
3. cannot be analyzed in any way by the annotator, we use **`flat`**.
4. is in a foreign language known to the annotator, we use **`flat:foreign`** and add a language feature lang=xxx to each token. This does not imply that all foreign text segments should be `flat`. Firstly, if the annotator knows the structure, the structures are no longer headless and should be annotated. Secondly, if the construction is a proper noun that is used in the main language of the corpus, the word is not foreign. Hong Kong is `flat` but not foreign even if we don&#39;t know the internal structure in Cantonese ("Perfumed Harbor").
5. Remaining headless constructions will be annotated with `fixed` relations.

Thus, we obtain

1. "the president -appos→ Obama", idem: "le président Macron", "the billionaire Perot", "the Prophet Mohammed"

2. "Hillary -`flat`→Clinton", "Hong -`flat`→ Kong", Burkina -`flat`→ Faso,

3. "Al  -`flat`→ Quaida", "El -`flat`→ Païs", "He sang Mahna -`flat`→ Mahna badi bidibi" (see Title section below)

4.  "orang -`flat:foreign`→ utan", "And then she went : _gjiko_ -`flat:foreign`→ _frac zen_"

5. "ad -`fixed`→ hoc", "parce -`fixed`→ que".

Note that we do not have `fixed`:foreign which could be a worthwhile distinction if cases such as the Latin construction "ad -`fixed`→ hoc" are common in a language.

## `flat`:

`flat` should only be used for headless constructions.

Discussion of some putative `flat` constructions:

- For "Louis XIV of France" it is clear that Louis is the head since he cannot be called XIV. The relation Louis → XIV should be appos, and not `flat`.
- Equally, titles are appositive: "President ←appos- bama", "Milliardär ←appos- Ross -`flat`→ Perot", French ←`amod`- ctor ←appos-Gaspard  -`flat`→ Ulliel
- "Natural Resources Conservation Service" is a named entity with a transparent syntactic analysis. Only `amod` and `compound` (for noun-noun) to be used here.
- `flat` should not be used for "New York", which is syntactically transparent in English (`amod`). idem to be analyzed with the usual compositional structure: United Kingdom, North Dakota, Rhode Island, Victoria Lake, Croke Park (by means of `amod`, `compound`, etc). Idem for hyphened entities: Stratford-upon-Avon or Southend-on-Sea ? They are analyzed just as their counterpart without hyphens: "Newcastle upon Tyne". The hyphens are just to be attached as punct relations.
- For "Hillary Rodham Clinton", Rodham alone cannot be used alone to address this person, only Hillary Rodham. Thus Rodham should depend on Hillary but not with a `flat` relation, possibly appos is a better choice.
- Dates such as "the 4th of July" have a transparent syntactic analysis. Equally "der 1. März 2018". "1 December 2016" however, seems headless because none of the components can replace the whole. Thus, `flat` seems like a good solution.
- Idem for numbers such as "four thousands". These numbers might be more syntactically transparent in other languages and would receive a compositional analysis in that case.
- In current English treebanks, "the Bush administration" is annotated with Bush `flat`&gt; administration. This should simply be a `compound`, see compounds.

##### Difficult cases:

How to handle Papua New Guinea, North Rhine-Westphalia, Provence-Alpes-Côtes d&#39;Azur (PACA), Tamil Nadu?

Proposal: No `flat`: Papua &lt;`compound` Guinea, Rhine -`conj`&gt; Westphalia, Tamil &lt;`compound` Nadu (Tamil is a language and an English word), la Nouvelle-Orléans.

## `flat:foreign`

Discussion of some putative `flat:foreign` constructions:

Ludwig van Beethoven

Although "van" is not a German word (it is mistaken as such in the current guidelines) it is sufficiently similar to the German preposition "von" that the structure is transparent to any German speaker and many family names have a "von" eg _Hildegard von Bingen_. However, the lang=nl feature can be applied to the ADP _van_.

Equally, for

Los Angeles, Rio de la Plata

the annotators have two choices for these named entities

1. analyzing them internally. Then

- OS and relations should be correct for the given language,

- the lang feature should be specified on each word,

- the head noun could receive a MWEPOS=PROPN

it is easy to kick out these parts for any training on the treebanks or to downgrade the treebanks to the second solution:

2. not analyzing them. Then

- the whole expression gets a `flat` bouquet

- all POS should be PROPN

- the lang feature can still be specified if it is known to the annotator.

Note that the current French Google UD has already analyzed English Language subsystems. The same treebank also shows that sometimes this practice leads to errors: For example, Sun Yat-Sen is analyzed as `compound`&gt; instead of `flat`&gt; (it&#39;s a person&#39;s name)

l&#39; Université de Zhongshan ( Sun ←`compound`- Yat-Sen ) à Canton

Question:

Is it a problem if some annotators know that we have "Los &lt;det Angeles", "Al &lt;det Qaida" or "Hong &lt;`amod` Kong" and annotate accordingly and others don&#39;t?

Another problem is personal names in different cultures (see the Hillary Rodham Clinton problem above). In order to analyze the name, one will have to know something about the language. But the same holds for any journalist that mentions such a name: How to abbreviate Xi Jinping? Xi or Jinping? If the journalist knows that, the head question can be answered, too.

## Encoding

POS encoding: For `flat` and `fixed` constructions, we cannot assign an interior structure. So usually all words carry the POS assigned to the whole entity, often PROPN but also ADV, SCONJ etc.

For example, Hong Kong has no internal structure accessible to the English annotator. It receives a _`flat`_ relation and both words have PROPN as POS.

Text elements that are of foreign origin, not named entities, and the language is known receive the **lang** feature on each token. For example to Hong and to Kong we add lang=Cantonese or with the ISO abbreviation lang=yue.

In order to preserve existing MWE annotation of syntactically transparent text segments that are now analyzed compositionally, such as "New York", we can follow losely the PARSEME proposal: the head (here "York") can carry a special feature _MWEPOS_ "`compound` category" MWEPOS=PROPN and the other members (here only _New_) of the `compound` can carry a _INMWE=Yes_ feature

## Titles of art work

In the same vein, titles that have an internal structure should be analyzed syntactically, for example: "The Lord of the Rings"

The head, "Lord" should have a MWEPOS=PROPN and all the other element should have INMWE=Yes

Problem: this simple MWEPOS, complement feature cannot capture embedded groupings:

 "_I&#39;ve finally seen Dr. Strangelove or: How I learned to love the bomb._"

The sentence has no `flat` relation and "Strangelove", the head of the title, has a MWEPOS=PROPN feature and all other words of the title have a complement=Yes feature. This does not capture the extent of the name Dr. Strangelove but in this case the `compound` relation Strangelove `compound`&gt; Dr is endocentric as it carries PROPN on Strangelove.

Equally, for the following example, we can only encode one level of MWE, but it is sufficient to express that Sun Yat-Sen University is one semantic unit with MWEPOS=PROPN on University:

the Sun `flat`&gt; Yat-Sen &lt;`compound` University

## `fixed`

`fixed` is used for "certain `fixed` grammaticized expressions that behave like function words or short adverbials".

It concerns mainly complex prepositions, complementizers and determiners.

Currently this relation is used too extensively because many of these function words are actually syntactically transparent such as "on top of", "top of the range"

Three main changes:

- If the expression is syntactically transparent, `fixed` should no longer be used.
- Prepositions that are in the valency of a governing expression are never considered as part of the governing expression.
- To cover all cases in different languages, we simply reserve `fixed` for all headless constructions that are not permutable, understandable for the annotator, not foreign, and do not form a PROPN or NOUN.

If we regularize an existing `fixed` MWE, we use the same dual MWEPOS/INMWE feature encoding, introduced above for `fixed`, to keep the information of the extent of the MWE in the treebank (excluding the case/preposition sub-categorization)

Currently, in many languages, many of the multi-word prepositions and determiners that form semantic units are already annotated compositionally, often with the noun as the head. For example

"on top of that" and similar complex prepositions should now coherently have "top" as NOUN as head, "on" as case and "that" as `nmod`. "top" could also have a MWEPOS=ADP feature and "on" a INMWE=Yes feature. "of" shall not be marked in any special way.

Equally, "because of" shall not receive any `fixed` relation or special MWE features.

Cases where we keep the `fixed` relation:

French: "parce que" &#39;because&#39;. Reason: We cannot even assign a POS to "parce" and the relation between the two tokens.

German: als ob, nach wie vor,
we no longer use `fixed` for: "unter anderem" because the expression is a transparent PP. Idem for the postpositions in expression such as "von x an" that should have a common compositional analysis (-case→ADP).

Proposal for English: We keep "Of course"? "As of"? "As well"? "Rather than"? "Kind of"?

And no longer should be analyzed as `fixed`:

"be up to sth", "instead of", "according, due, prior to", "so that", "more than", "whether or not"

## `compound`:

Compound should be used for very cohesive regular constructions that are neighboring morphology. Cohesive means that the meaning is often non-compositional although the construction remains productive.

Currently it is used for regular systems of "compounding" in different languages

In particular

- noun-noun compounding for example in English
- verb particles in English
- serial verbs for example in Chinese, Cantonese and Naija

If a language does not have a regular system of compounding, the `compound` relation is not used. In most current French treebank noun-noun compounding is annotated by different means than the `compound` relation, see discussion below, and `compound` only appears for foreign segments of text.

Just like for the two other MWE relations, `compound` should only be used if no other regular dependency is available. For example, in English, `compound` is currently used for "Prime Minister" although prime is just an adjective and the structure is transparently `amod`.

Question: Even Lake Michigan, Mount Rushmore, Fort Alamo should be a left-to-right `compound`? Yes That would use `compound` for two (slightly) different constructions.

## Discussion from the current `flat` page:

**My answers in bold**

_This paragraph briefly records some of the arguments that have been made in the past on relations for name structure. It is an issue over which there has historically been variation and about which there is some continuing debate._ Examples like _French actor Gaspard Ulliel:_ Some treebanks have used `nmod` for titles and honorifics like _Mr._ or _French actor_. Most people think this is inappropriate, since an `nmod` dependent should be a full phrase, which will typically take its own case as a modifier in a cased language. In contrast, these titles seem to be part of the same phrase as the name that follows them; they show case agreement concord in a cased language.

**Answer: This argument would imply that all languages use `nmod` only where the modifier is a complete sentence. This would make the very productive noun-noun compounds in French impossible to analyze:**

**Imprimante →? laser; accès → handicapés; espace → fumeur**

Some grammatical traditions, descending from Latin, call _French actor_ in such cases a "`fixed` (or close) apposition" and take the name as the head. UD has restricted the appos relation to following appositives (corresponding to "loose (or wide) apposition" in the Latin tradition). The relation appos is only used when you have two full nominals, typically joined loosely, and often separated by a punctuation mark like a comma. So appos is not correct for these cases. Sometimes the relation `compound` has been used, but this does not seem right. It implies headedness, and titles do not usually behave like compounds: in German, they are not joined to the following words, as compounds are normally joined in German, and they appear at the beginning of names in both German and Hebrew, even though German compounds are head last and Hebrew compounds are head first.

**Answer: Is this an argument based on spelling conventions?**

So `compound` does not seem appropriate either.

**No, this does not follow.**

Some UDv1 treebanks used `flat` for honorifics like _Mr._, although some felt that was wrong and `flat` should be restricted to joining the proper nouns of multi-word names. In UDv2, `flat` was removed and replaced by `flat`, which allowed a broader notion of a chunk of unheaded material. In the UDv2 guidelines, cases of both titles and honorifics are joined to names with `flat`.

## Work program of the MWE group

Issues to address, priorities

What is a MWE?
  - Where to push semantic information that was already annotated in UDs, and that we want to get rid of in the syntactic annotation? How to perform transformation?
  - Issues wrt. specific types of MWEs
    - LVCs
    - Complex determiners and prepositions (a lot of)
    - Idioms - hould it be treated as one unit?
    - Inherently reflexive verbs
    - Defining grammar for subsystems (proper names etc.)
  - Propose UD annotations for the MWEs covered by PARSEME guidelines
  - Implications of syntactic irregularity on semantic non-compositionality
  - Endogenous (syntactically regular) vs exogenous (syntactically irregular) expressions
- Next step:
  - Define a typology of MWEs, starting from Kim&#39;s paper

## Classification of semantic and syntactic irregularities


|   | Compositional | Semi-compositional | Non-compositional |
| --- | --- | --- | --- |
| Regular construction | Typical syntax (_the dog slept_) | [wide] awake, [heavy] smoker, rain [cats and dogs] | _kick the bucket, green card, cats and dogs, in the light (of),_ Fr. _pomme de terre_ &#39;potato&#39; |
| Sub-system | Dates: _5th of July,_ _tomorrow morning_Titles: _Miss Smith_ | _Ludwig van Beethoven_ in Ger­man (_van_ is a Dutch word simi­lar to Ger. _von_) | _on top (of), in case (of),_ Fr. _à côté (de)_ &#39;next (to)&#39;Meaningful dates: _September 11th, 4th of July_Mount Rushmore, Fort Alamo |
| Irregular construction | Fr. _peser lourd_ &#39;weigh a lot&#39;, lit. weigh heavy | Fr. _cucul la praline_ &#39;very silly&#39;, lit. silly the praline  | a) _not to mention, a lot (ADJ-er), top of the range,_ Fr. _Dieu sait quoi_ &#39;heaven knows what&#39;b) Fr. _n&#39;importe quoi_ &#39;anything&#39;, _by and large_c) _each other_, Fr. _à qui mieux mieux_ &#39;each trying to do better than the other&#39;, lit. to whom better bet­terd) _ad hoc_, _Al Qaeda,_ Fr. _parce que_ &#39;because&#39; |

**Table 1.** Different types of MWEs

## Bibliography

- Kahane, Courtin, Gerdes " [Multi-word annotation in syntactic treebanks](http://www.anthology.aclweb.org/W/W17/W17-7622.pdf)", TLT 2018.
- PARSEME annotation [guidelines](http://parsemefr.lif.univ-mrs.fr/parseme-st-guidelines/1.1)v 1.1






# old stuff from the page:



* Names
* Dates
* Multiword prepositions (*in front of*, *due to*, *rather than*, *except for*)
  - #496](https://github.com/UniversalDependencies/docs/issues/496)
* *according to*: [#491](https://github.com/UniversalDependencies/docs/issues/491)
* *nothing but*: multiword preposition? adverb?
  - Jana Kueck was nothing but professional*
