---
layout: postag
title: 'ADV'
shortdef: 'adverb'
udver: '2'
---

## ΑDV: adverb

### Definition

Adverbs are words that typically modify verbs for place, time, manner or quantity. They may also modify adjectives and other adverbs, as in *πολύ έξυπνος* / *poli eksipnos* ‘very clever', *πολύ αργά* / *poli arga* ‘very late.ADV' respectively.

Adverbs are formed productively from adjectives  and  participles in _-μένος_ with the ending _-α_: _δίκτυο_.Noun, _δικτυακός_.Adjective, _δικτυακά_.Adverb ‘web, of-the-web, web(manner)'.

Some adverbs seem to form phrasal verbs (rare phenomenon in Greek),  such as *βάζω μπρος/μπροστά* / *vazo bros/brosta* ‘to start an engine/to start operating'. Although they function as particles in a multiword expression, they are assigned the tag ADV and the multiword status of the expression is accounted for in syntax.

Adverbs may be assigned the <code>PronType</code> feature:
- demonstrative adverbs ([PronType=Dem]()): *εδώ* / *edo* ‘here', *εκεί* / *eki* "there", *τώρα* / *tora* ‘now', *τότε* / *tote* "then"
- indefinite adverbs ([PronType=Ind]()): *κάπου* / *kapou* "somewhere", *κάποτε* / *kapote* "sometime"', *οπουδήποτε* / *opoudipote* "anywhere", *οποτεδήποτε* / *opotedipote* "anytime"
- interrogative adverbs ([PronType=Int]()): *πού* / *pou* "where", *πότε* / *pote* "when"', *πώς* / *pos* "how", *γιατί* / *giati* "why", *τι* / *ti* "what"
- negative adverbs ([PronType=Neg]()): *πουθενά* / *pouthena* ‘nowhere", *ποτέ* / *pote* "never"
- relative adverbs: *όπως* / *opos* `in the way that, as"
- totality adverbs ([PronType=Tot]()): *παντού* / *pantou* "everywhere", *πάντα/πάντοτε* / *panta/pantote* "always"


Modern Greek uses complex structures consisting of an adverb and an adposition: *(μέσα σε)* (lit: in to) μέσα: ADV σε: ADP, *(ενάντια σε)* (lit: contrary to) ενάντια: ADV σε: ADP. The  ADP depends on the ADV  wth the relation [fixed]().

Non-inflecting verb forms ending in *-όντας, -ώντας* (adverbial participles) share properties and usage of adverbs and verbs and are assigned the tag [VERB](), the specification <code>VerbForm=Conv</code> and are tagged for <code>Aspect</code> and <code>Voice</code>.  

*μετά* and *εντός* may appear with a noun in the genitive case: the first denotes accompaniment, e.g.,  *μετά ληστείας* / meta listias "together with a robbery" while both are structures inherited from older versions of the language, e.g. *εντός δευτερολέπτων* / entos defterolepton "within minutes". In all these cases *μετά* and *εντός* are assigned the tag [ADV]().

The structure consisting of a pair of identical adverbs is a degree modification one, e.g., *πάνω πάνω* Lit. up up "on the very top", *πίσω πίσω* Lit. back back "at the very back", *σιγά σιγά* Lit. slowly slowly "very very slowly", *πονηρά πονηρά* Lit. cuningly cuningly "very very cunningly". Each adverb is assigned the tag [ADV]() and the second adverb depends on the first one with the [Compound:redup]() dependency.

Multiword adverbs such as *καλού-κακού* Lit. of good-of bad "just to make sure": both words are  assigned the tag [ADV]() and the second adverb depends on the first one with the <code>fixed</code> relation.  

Adverbs may be specified for the feature [Degree](el-feat/Degree), e.g. _καλύτερα_ "better",  and for the feature [NumType](el-feat/NumType), e.g. *άπαξ* / *apaks* ‘once'. They may exhibit degree modification phenomena in which case they are assigned the lemma of the original adverb and the feature [Degree]() receives the value [Dim](), e.g., *φτωχούτσικα* / *ftohoutsika* "somewhat poorely", *καλούτσικα* / *kaloutsika* "somewhat good".

### Examples
-	locative adverbs: *απέξω* / *apekso* ‘outside’, *εδώ* / *edo*  ‘here’, *εκεί* / *eki* ‘there’, *πάνω* / *pano* ‘up’, *κάτω* / *kato* ‘down’, *δεξιά* / *deksia* ‘right’, *αριστερά* / *aristera* ‘left’, *κάπου* / *kapou* ‘somewhere’, *παντού* / *pantou* ‘everywhere’, *πουθενά* / *pouthena* ‘nowhere’, *πού* / *pou* ‘where’
-	manner adverbs: *ακριβώς* / *akrivos* ‘precisely’, *γιατί* / *yiati* ‘why’  (when it is on its own/it introduces direct questions), *καλά* / *kala* ‘good/fine’, *κατανάγκη* / *katanagki* ‘necessarily’, *πώς* / *pos* ‘how’, *υπόψη* / *ipopsi* ‘care of’
-	temporal adverbs: *αύριο* / *avrio* ‘tomorrow’, *κάποτε* / *kapote* ‘sometime’, *καταρχήν* / *katarchin* ‘first of all’, *πάντα* / *panta* ‘always’, *πέρσυ* / *persi* ‘last year’, *πότε* / *pote* ‘when’, *ποτέ* / *pote* ‘never’, *σήμερα* / *simera* ‘today’, *τότε* / *tote* ‘then’, *τώρα* / *tora* ‘now’, *χθες* / *chthes* ‘yesterday’
-	quantity adverbs: *άπαξ* / *apaks* ‘once’, *καθόλου* / *katholou* ‘at all’, *λίγο* / *ligo* ‘a little’, *μόνο* / *mono* ‘only’, *τόσο* / *toso* ‘so’



### References

Holton, David, Peter Mackridge & Irene Philippaki-Warburton. 1997. *Greek: A Comprehensive Grammar of the Modern Language*. Routledge, London 1997; reprinted 1999, 2002 & 2004 

Mackridge, Peter. 1985. *The Modern Greek Language. A Descriptive Analysis of Standard Modern Greek*. Oxford University Press, Oxford 1985. (Paperback edn, 1987, reprinted 1989 & 1992) 

Κλαίρης, Χρήστος  & Γεώργιος Μπαμπινώτης. 2001. *Γραμματική της Νέας Ελληνικής* Τόμος Γ’. 2η έκδοση. Αθήνα: Ελληνικά Γράμματα. 

Τζάρτζανος, Αχιλλέας, 2002. *Νεοελληνική Σύνταξις της Κοινής Δημοτικής*. Αθήνα: Εκδόσεις Κυριακίδη. σελ. 225.

https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/


<!-- Interlanguage links updated Po lis 14 15:34:29 CET 2022 -->
