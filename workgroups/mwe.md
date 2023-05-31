---
layout: base
title:  'Working Group on Multiword Expressions'
udver: '2'
---

# Working Group on Multiword Expressions

**This page was created by Kim Gerdes. Comments have so far been added by <span style="color:blue">Joakim Nivre</span>, <span style="color:red">Nathan Schneider</span> and <span style="color:green">Agata Savary</span>.**

## MWEs in UD

The purpose of this page is to serve as a basis for discussion for the improvement of multi-word annotation in UD.

UD is a syntactic annotation scheme. Thus, **these three relations should encode syntactically problematic constructions that cannot be analyzed by other "regular" dependency relations**. The objective of a syntactic annotation scheme is not primarily to encode idioms and named entities.

<span style="color:red">**Nathan:** A general comment (forgive me if this is obvious or naïve) is that MWEs typically arise over time by reuse and adaptation of core/canonical constructions in the language (such as modification, compounding, and so forth). In MWEs/non-canonical constructions these become specialized, sometimes acquiring idiomatic meaning, sometimes becoming grammatically fossilized, and sometimes forming "minigrammars" (Fillmore's term; maybe corresponds to "sub-system" below) for certain kinds of productive expressions, like names, numbers, dates, addresses, and kinship terms. Often, as in English light verb constructions, there is a mostly canonical form despite an idiomatic meaning, in which case I think the UD policy is and should be to analyze it with a canonical structure: UD is syntax, not semantics. For minigrammars with frequent and readily identifiable slots, like titles in personal names in English, I think it may be appropriate to identify an appropriate canonical relation and subtype it to provide clarity to annotators and parsers that a special overall construction is present: e.g., `nmod:title` or `nmod:prename`. The core slots in a personal name (given names and surnames) do not have any apparent head, though the order is significant within the minigrammar, so `flat:name` makes sense to me. Similarly with `flat:foreign`. The hardest one is `fixed`, because for special grammatical expressions one can often see a trace of the original structure yet recognize it as serving a coherent and lexicalized grammatical purpose, so there may be no clear test that determines where to draw the line. But there is clear room for improvement in the guidelines in any case.
</span>

<span style="color:green">**Agata**: In this discussion we will probably mainly (constructively) critisize the current proposal. So let me start by saying that I truly admire what has already been done in UD, and I'm grateful for all these efforts that very substantially benefit a very large community, including PARSEME.</span>

### Proposals for the MWE relations `fixed`, `flat`, and `compound`:

The `fixed` relation is used for syntactically irregular constructions, while `flat` and `compound` are used for productive constructions corresponding to syntactic sub-systems. We should reserve `flat` for constructions where a head cannot be determined, and we should use `compound` for very cohesive constructions, neighboring morphology.

The current definitions of the three relations are problematic or not applied consistently:

* The definition of the `fixed` relation states that `fixed` constructions "do not have any internal syntactic structure (except from a historical perspective)" and that their structural annotation would be "in principle arbitrary". Currently `fixed` is used for quite many idioms with the role of function words or short adverbials even when they clearly have an internal regular structure ("on top of", "à côté de"). <span style="color:blue">**Joakim:** The notion of regular vs. irregular structure is not clear-cut. For example, "on top of" contains a determinerless prepositional phrase, which is not a regular structure in English. Compare: "*the book is on table".</span> <span style="color:green">**Agata:** Firstly, I think that the <tt>fixed</tt> label does not reflect the intended scope very well. Here, we try to capture the fact that syntax is (i) irregular, and/or (ii) arbitrarily understood, rather than that the expression is morpho-syntactically fixed. In case (i) I would rather use <tt>irreg</tt> or alike, in case (ii) the already existing <tt>flat</tt> label would actually be more intuitively correct. So for me, there is a potential confusion between the scopes of <tt>fixed</tt> and <tt>flat</tt>. Secondly, on the one hand I understand the pragmatic objective of ignoring (the remnants of) the syntactic structure in expressions like _on top of_. But on the other hand, I like Kim's desire to explicitely interpret these remnants as much as possible. A vanishing determiner is not THAT irregular: large classes of prepositions require no determiners for the following noun (e.g. _en_ in French: _en présence de_, _en voiture_ etc.). But maybe it's because we have no articles in Polish that I'm so negligent about them ;-)</span>

* Following the definition, `compound` should be used for "any kind of X0 compounding" (which seems quite circular and cryptic) and lists a few examples: noun-noun compounds, verb-particles, serial verbs and, strangely enough, light-verb constructions in Persian and Japanese. <span style="color:blue">**Joakim:** Defining `compound` in terms of compounding may be seen as circular, but X0 compounding is meant to convey that it involves words being combined to form words, rather than phrases. And I don't understand why you consider Persian light verbs more strange than, say, serial verbs. Light verbs in Persian are completely lexicalized combinations that do not allow internal modification or inflection and in this way very different from what is called a light verb construction in a language like English (the latter being completely regular from a syntactic point of view). I don't know the details about Japanese, but I suspect it is similar to Persian rather than English.</span>
<span style="color:pink"> **Sy:** There also languages with object incorporation. The fact that object-verb can form compounds is ok. But the notion of light verb is more semantic than syntactic, so it's maybe a problem of terminology.</span>
<span style="color:green">**Agata**: I see no problem in treating compounding as a particular syntactic process deserving a special label. But I must say that its scope is not quite clear for me. Notably, the condition that compounds "behave as lexical units rather than compositional syntactic phrases" is problematic for two reasons: (i) it is a semantic rather than  a syntactic motivation, (ii) it is true of many other constructions which are not compounds (e.g. _part of speech_). Or is _part of speech_ also a compound, currently? I'm not sure...</span>

* The definition of `flat` states that it should be used for "exocentric (headless) semi-fixed MWEs", while it is not clear what "semi-fixed" means. It is used for many constructions where it seems straightforward to determine a head, such as "President Obama", where Obama can be used alone instead of the whole construction, but not President. President Obama went to Paris. Obama went to Paris. \*President went to Paris. <span style="color:blue"> **Joakim:** Semi-fixed means that they allow some changes, typically inflection, but not insertion of modifiers and word order changes. This is admittedly a matter of degree, but I believe the notion is pretty standard in the MWE literature. However, I do think it is a problem that the current definition conflates the notion of semi-fixed MWEs with that of headless structures, since these two classes are obviously not co-extensional. (There are semi-fixed MWEs that are not headless and, vice versa, headless structures that are not MWEs.) So one of the things we need to decide is what should take priority here, and I agree that it makes most sense to use the absence of a head as the main criterion. But this needs to be qualified and cannot be reduced to the simple test of whether one of the elements can replace the whole. Otherwise, we would end up reducing most constructions to `flat`, including predicate-argument structures and prepositional phrases, for example. Compare: "she came" (where neither "she" nor "came" can replace the whole) and "in Paris" (where neither "in" nor "Paris" is equivalent to the whole).</span>
<span style="color:pink">**Sy:** The criteria is: "if AB can commute with A and not B, A is the head." Or equivalently: "if AB is headless, AB commute with both A and B or without both A and B." The reciprocal is not true.</span>
<span style="color:green">**Agata**: A agree with Joakim that what we probably preferably want to express is the headlessness. More generally, I want to question the usefulness of syntactic fixedness/flexibility in our scope. Flexibility/fixedness is a complex issue, and it does not only relate to MWEs. But most importantly, annotating this feature in a treebank seems extremely challeging. This is because, when looking at a particular expression in a particular context, we have to relate to many other (existing or potential) occurrences of the same expression, in order to judge if it is fixed or (partly) flexible. I also think that this is not an information to attach to a particular occurrence of this expression, but rather to an entry in an external lexicon. In other words, flexibility is a property of types rather than tokens. So my proposal is not to consider the flexibility criterion in this framework. Conversely, the headedness is truly the property of a particular occurrence, and I would focus on it to define the scope of the <tt>flat</tt> label. But if we do, then what I understand as <tt>flat</tt> largely overlaps with what I understand as <tt>fixed</tt> (unless we change <tt>fixed</tt> to <tt>irreg</tt>).</span>

All syntactically regular constructions should receive a normal compositional analysis. Their idiomatic status can be annotated on a different level of (semantic) annotation. This includes semantically compositional (_the dog slept_), semi-compositional (_[wide] awake, [heavy] smoker, rain [cats and dogs]_), and semantically non-compositional constructions (_kick the bucket, green card, cats and dogs, in the light (of), Fr. pomme de terre &#39;potato&#39;_). See the article Kahane, Courtin, Gerdes "[Multi-word annotation in syntactic treebanks](http://www.anthology.aclweb.org/W/W17/W17-7622.pdf)", TLT 2018 for a detailed definition of the terms.
<span style="color:green">**Agata**: I like the idea of the 2-dimensional typology in this paper (along the syntactic axis, and along the semantic one). But I have serious problems with their interactions. Most importantly, the notion of semantic non-compositionality is unclear or even inconsistent. For me:</span>
* <span style="color:green">An expression is semantically compositional if its meaning can be derived (i) in a way deemed regular (ii) from its component words and (iii) from its syntactic structure (e.g. the semantics of "horse race" must be different from the one of "race horse").</span>
* <span style="color:green">Thus semantic non-compositionality occurs when at least one of (i)-(iii) fails.</span>
* <span style="color:green">This implies that syntactically irregular constructions cannot be semantically compositional because (i) fails.</span>
* <span style="color:green">Also, it is unclear for me what is meant by the semantics of named entities; why would "Miss Smith" and not "Ludwid van Beethoven" or "Mount Rushmore" be semantically compositional? what is meant to be the regular the semantic derivation process for named entities?
</span>
 
 
Constraining more precisely the extent of headless and irregular relations is generally expected to lead to a much smaller set of constructions using `flat`, `compound`, or `fixed`. A mainly syntactic definition will also make the semantic extent of the usage of these relations more variable among languages. We cannot expect, for example, that all person or organization names will syntactically behave the same in different languages.

In addition to the more precise definition, we also have to make proposals on how to preserve previously annotated units of MWE. 
<span style="color:green">**Agata**: There has been a discussion going on (involving Dan, Joakim, Filip, Carlos, Silvio and Agata) about defining an extension of the <tt>connlu</tt> format to accomodate annotations from other initiatives (like PARSEME), which build on UD treebanks, or more generally on the <tt>conllu</tt> format. A first version is available [here](http://multiword.sourceforge.net/cupt-format) (it still needs validation by the UD-PARSEME group). Note that first a **meta-format** is defined, which basically consists of (i) adding new columns to the 10 <tt>conllu</tt> columns, (ii) specifying the names of columns used (in the first line of a file), (iii) standardizing identifiers for source sentences.
 Each initiative can instantiate this meta-format by defining the names and syntax of its own additional columns. For PARSEME, we defined the <tt>cupt</tt> format (used in our brand new PARSEME corpus edition 1.1) which adds 1 column named <tt>PARSEME:MWE</tt> containing VMWE annotations. The same meta-format could be used to conserve the previous MWE annotations from the current version of UD2. A column would just be added with a standardized name (e.g. <tt>UD2-obsolete:MWE</tt>) and syntax (as currently in UD2). </span>

Here we explore to which extent some basic non-embedded structures can be expressed using the dual MWEPOS/INMWE features, that will be presented below (see thread https://github.com/bguil/UD-French-discussion/issues/16 for a discussion in French on the feature names). <span style="color:blue">**Joakim:** These features are not compatible with v2 of the guidelines, are they? I think we need to clearly distinguish what we propose as improvements under the current guidelines and what we would like to see in future versions of the guidelines.</span>
<span style="color:green">**Agata**: I realize that my proposal of not taking fixedness/flexibility into account at all may be much too radical for v2. The only way to save it would be to totally abandon the <tt>fixed</tt> label and use <tt>flat</tt> for all headless constructions, whether fixed or semi-fixed. Would this still be too radical? Also, I don't follow the definition of a headless construction (see below).</span>

## Headless structures

Both the `flat` and the `fixed` relation are used for headless (=flat) constructions, i.e. when no head can be determined. A construction AB is headless if either both A and B can replace AB or neither A nor B can replace AB – both cases will be described separately below. Headless constructions are annotated in one arbitrary but `fixed` style. UD chooses the bouquet style, i.e. all words depend on the first word.

If, however, AB can be replaced only by A, A is the head; if AB can be replaced only by B, B is the head. Then the construction is headed and the relation between A and B is not `flat` or `fixed`.

### Case N: neither A nor B can replace AB:

He reads El Païs. \*He reads El. \*He reads Païs.

<span style="color:green">**Agata**: This would mean the any Det+N construction is headless (if the noun requires a determiner)! For instance, _I see the girl._ \*_I see the._ \*_I see girl._ Where do I go wrong?</span>

Idem for "ad hoc" and "parce que"

We will determine below which relation, `flat` or `fixed`, should be used in these cases.

This case should be considered as default also if the annotator just does not know whether this substitution is possible because the text is in a foreign language, for example.


### Case B: both A and B can replace AB:

Note that this description also fits to appos relations. We will have to provide criteria to distinguish when `flat`, `fixed`, or appos should be used. <span style="color:blue">**Joakim:** The description also fits relations like `conj`, `parataxis` and `list`.</span>

For "Hillary Clinton", both parts can replace the whole. Thus, we cannot determine a head. Note that we can not permute the tokens: \*Clinton Hillary

"the president Obama" can be replaced by "the president" and by "Obama". Again, we cannot determine a head. This time we can permute word order: Obama, the president.

However, "Mister Miller" can be replaced by Miller and not by Mister (Mister can only be used alone as a vocative). It&#39;s a headed construction Mister ← Miller. Cf. the section on compounds for noun-noun constructions in English. The same holds for "President Obama" and "French actor Gaspard Ulliel".

## Which relation names for headless constructions?

Headless constructions always have a bouquet structure. But when to use `flat`, `fixed`, and appos?

We propose:

If a headless construction...

1. has a permutable word order (and case B), we use **appos**. <span style="color:blue">**Joakim:** This does not seem consistent with the v2 guidelines. The `appos` relation is currently restricted to the case of loose (or wide) apposition (as discussed below). This may be changed in future versions, although I would personally prefer subsuming all appositions under `nmod` (possibly with special subtypes). Under the current guidelines, `nmod` seems to be the best candidate here. </span>
2. designates as a whole a proper noun, i.e. we would like to give it PROPN as POS, we use **`flat`**. A test could include whether the sentence remains grammatical if the construction is replaced by a single proper noun. Depending on the language, this might also include dates and addresses. This does by no means imply that all proper nouns, dates, or addresses should be `flat`. They should be `flat` if and only if they are also headless. Question: maybe include POS NOUN for oran utang? <span style="color:blue">**Joakim:** It seems a bit arbitrary to single out the name category and put (almost) all other headless constructions into `fixed`. What if they are not fixed expressions but productive constructions?</span>
3. cannot be analyzed in any way by the annotator, we use **`flat`**.
4. is in a foreign language known to the annotator, we use **`flat:foreign`** and add a language feature lang=xxx to each token. This does not imply that all foreign text segments should be `flat`. Firstly, if the annotator knows the structure, the structures are no longer headless and should be annotated. Secondly, if the construction is a proper noun that is used in the main language of the corpus, the word is not foreign. Hong Kong is `flat` but not foreign even if we don&#39;t know the internal structure in Cantonese ("Perfumed Harbor").
5. Remaining headless constructions will be annotated with `fixed` relations. <span style="color:blue">**Joakim:** As noted above, it seems wrong to me to use `fixed` unless the expression is really fixed. And what happened to the idea that `fixed` is only used for irregular constructions?</span>

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

- For "Louis XIV of France" it is clear that Louis is the head since he cannot be called XIV. The relation Louis → XIV should be appos, and not `flat`. <span style="color:blue">**Joakim:** Why not `nummod`?</span><span style="color:pink">**Sy:** "I know 14 Louis" and " I know Louis XIV" are two different constructions. Having the same relation is problematic.</span>
- Equally, titles are appositive: "President ←`appos`- Obama", "Milliardär ←`appos`- Ross -`flat`→ Perot", French ←`amod`- actor ←`appos`- Gaspard -`flat`→ Ulliel <span style="color:blue">**Joakim:** Use `nmod` instead of `appos`.</span>
- "Natural Resources Conservation Service" is a named entity with a transparent syntactic analysis. Only `amod` and `compound` (for noun-noun) to be used here.
- `flat` should not be used for "New York", which is syntactically transparent in English (`amod`). idem to be analyzed with the usual compositional structure: United Kingdom, North Dakota, Rhode Island, Victoria Lake, Croke Park (by means of `amod`, `compound`, etc). Idem for hyphened entities: Stratford-upon-Avon or Southend-on-Sea ? They are analyzed just as their counterpart without hyphens: "Newcastle upon Tyne". The hyphens are just to be attached as punct relations.
<span style="color:blue">**Joakim:** I am willing to defend the use of `flat` for "New York". Neither "New" nor "York" can replace the whole, so it seems to satisfy the criterion. By contrast, `amod` implies an endocentric construction.</span>
<span style="color:pink">**Sy:** "York" can replace "New York" in every position. Of course "York" and "New York" are two diffrent cities, but it is a problem of semantics, not of syntax.</span>
- For "Hillary Rodham Clinton", Rodham alone cannot be used alone to address this person, only Hillary Rodham. Thus Rodham should depend on Hillary but not with a `flat` relation, possibly appos is a better choice.
- Dates such as "the 4th of July" have a transparent syntactic analysis. Equally "der 1. März 2018". "1 December 2016" however, seems headless because none of the components can replace the whole. Thus, `flat` seems like a good solution.
- Idem for numbers such as "four thousands". These numbers might be more syntactically transparent in other languages and would receive a compositional analysis in that case.
- In current English treebanks, "the Bush administration" is annotated with Bush `flat`&gt; administration. This should simply be a `compound`, see compounds.

##### Difficult cases:

How to handle Papua New Guinea, North Rhine-Westphalia, Provence-Alpes-Côtes d&#39;Azur (PACA), Tamil Nadu?

Proposal: No `flat`: Papua &lt;`compound` Guinea, Rhine -`conj`&gt; Westphalia, Tamil &lt;`compound` Nadu (Tamil is a language and an English word), la Nouvelle-Orléans.

## `flat:foreign`

<span style="color:blue">**Joakim:** This and the following two sections seem to presuppose conventions that are neither part of the current guidelines, nor described on this page, such as "MWEPOS=PROPN". This needs to be clarified. I think it will be much clearer if the section entitled `flat` is followed by a section entitled `fixed`. The intervening sections should either be marked as subsections of the `flat` section or marked elsewhere.</span>

Discussion of some putative `flat:foreign` constructions:

Ludwig van Beethoven

Although "van" is not a German word (it is mistaken as such in the current guidelines) it is sufficiently similar to the German preposition "von" that the structure is transparent to any German speaker and many family names have a "von" eg _Hildegard von Bingen_. However, the lang=nl feature can be applied to the ADP _van_.

Equally, for

Los Angeles, Rio de la Plata

the annotators have two choices for these named entities

1. analyzing them internally. Then

- POS and relations should be correct for the given language,

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

<span style="color:red">**Nathan:** Another set of constructions worth discussing, at least for English, are what Quirk et al. call "quasi-modals": "used to" (habitual past), "about to" (prospective), "have to" (= must), "be going to" (future), etc. It looks like the infinitive marker *to* is attached to the infinitive verb as usual, which is fine, but it's interesting that *have*, *used*, *be going*, and *about* are idiosyncratic in different morphosyntactic ways, and it's not even clear what the right POS is for *about*.</span>

Currently this relation is used too extensively because many of these function words are actually syntactically transparent such as "on top of", "top of the range". <span style="color:blue">**Joakim:** As noted above, they may be syntactically transparent but they are nevertheless irregular in that they lack articles.</span>

Three main changes:

- If the expression is syntactically transparent, `fixed` should no longer be used. <span style="color:blue">**Joakim:** This needs to be made more precise. Is transparent the same as regular (see comments above)=</span>
- Prepositions that are in the valency of a governing expression are never considered as part of the governing expression.
<span style="color:blue">**Joakim:** I don't understand what this means. It sounds like you are saying that "on" in "I depend on you" should not be part of "depend", which seems correct but not directly relevant to this topic. Please help me.</span> <span style="color:red">**Nathan:** Guessing this means that the final preposition in "on top of" and "next to" should be treated as a case marker of the following noun, rather than part of a fixed expression. I'm not convinced that "no fixed expression can end with a preposition" is the right policy, though. Consider: *The cat is on top of the chair → ??The cat is on top only of the chair / With respect to the chair, the cat is on top; The cat is adjacent to the chair → The cat is adjacent only to the chair / ?With respect to the chair, the cat is adjacent; The cat is next to the chair → \*The cat is next only to the chair / \*With respect to the chair, the cat is next.* I'm not necessarily suggesting these are the best tests for complex prepositions, but it feels misleading to analyze "next to" as the word *next* plus a PP, even if that was the structure historically.</span>
- To cover all cases in different languages, we simply reserve `fixed` for all headless constructions that are not permutable, understandable for the annotator, not foreign, and do not form a PROPN or NOUN. <span style="color:blue">**Joakim:** This seems much more permissive than the other changes and seems to imply that also regular constructions can be annotated with `fixed`. I don't see how this is going to help consistency or reduce the number of constructions that are annotated with `fixed` (which I also think we should do).</span>

If we regularize an existing `fixed` MWE, we use the same dual MWEPOS/INMWE feature encoding, introduced above for `fixed`, to keep the information of the extent of the MWE in the treebank (excluding the case/preposition sub-categorization). <span style="color:blue">**Joakim:** Again, note that this is not available in v2.</span>

Currently, in many languages, many of the multi-word prepositions and determiners that form semantic units are already annotated compositionally, often with the noun as the head. For example

"on top of that" and similar complex prepositions should now coherently have "top" as NOUN as head, "on" as case and "that" as `nmod`. "top" could also have a MWEPOS=ADP feature and "on" a INMWE=Yes feature. "of" shall not be marked in any special way.

Equally, "because of" shall not receive any `fixed` relation or special MWE features.

Cases where we keep the `fixed` relation:

French: "parce que" &#39;because&#39;. Reason: We cannot even assign a POS to "parce" and the relation between the two tokens.

German: als ob, nach wie vor,
we no longer use `fixed` for: "unter anderem" because the expression is a transparent PP. Idem for the postpositions in expression such as "von x an" that should have a common compositional analysis (-case→ADP).

Proposal for English: We keep "Of course"? "As of"? "As well"? "Rather than"? "Kind of"? <span style="color:pink">**Sy:** "rather than" is is syntactically clear: "I would rather wait here than go." "rather" is an ADV and "than" is its regime. But UD English has many inconstistencies concerniong "than"</span>

And no longer should be analyzed as `fixed`: <span style="color:pink">**Sy:** any/no/a little longer: no modifies the ADV longer</span>

"be up to sth", "instead of", "according, due, prior to", "so that", "more than", "whether or not"

## `compound`:

Compound should be used for very cohesive regular constructions that are neighboring morphology. Cohesive means that the meaning is often non-compositional although the construction remains productive. <span style="color:blue">**Joakim:** I think I basically agree with this point, but I would prefer morphosyntactic criteria rather than semantic.</span>

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

**Answer: This argument would imply that all languages use `nmod` only where the modifier is a complete noun phrase. This would make the very productive noun-noun compounds in French impossible to analyze:** <span style="color:blue">**Joakim:** I agree, there is nothing in the guidelines to suggest that an `nmod` needs to be a complete noun phrase.</span>

**Imprimante →? laser; accès → handicapés; espace → fumeur**

Some grammatical traditions, descending from Latin, call _French actor_ in such cases a "`fixed` (or close) apposition" and take the name as the head. UD has restricted the appos relation to following appositives (corresponding to "loose (or wide) apposition" in the Latin tradition). The relation appos is only used when you have two full nominals, typically joined loosely, and often separated by a punctuation mark like a comma. So appos is not correct for these cases. Sometimes the relation `compound` has been used, but this does not seem right. It implies headedness, and titles do not usually behave like compounds: in German, they are not joined to the following words, as compounds are normally joined in German, and they appear at the beginning of names in both German and Hebrew, even though German compounds are head last and Hebrew compounds are head first.

**Answer: Is this an argument based on spelling conventions?** <span style="color:blue">**Joakim:** No. The restrictive use of the `appos` relation is certainly a point worth discussing, but I would say we have to live with it in v2 and use `nmod` for the other cases.</span>

So `compound` does not seem appropriate either.

**No, this does not follow.**

Some UDv1 treebanks used `flat` for honorifics like _Mr._, although some felt that was wrong and `flat` should be restricted to joining the proper nouns of multi-word names. In UDv2, `flat` was removed and replaced by `flat`, which allowed a broader notion of a chunk of unheaded material. In the UDv2 guidelines, cases of both titles and honorifics are joined to names with `flat`.

## Work program of the MWE group

<span style="color:blue">**Joakim:** It is not clear how this and the next section relates to the material above. One question is whether our work should start from (a refined version of) the plan below or from the tentative proposals above. Perhaps it needs to be a continuation of the two.</span>

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
