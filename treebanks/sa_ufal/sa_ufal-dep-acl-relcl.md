---
layout: base
title:  'Statistics of acl:relcl in UD_Sanskrit-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit-UFAL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sa_ufal-dep-acl.html">acl</a></tt>.

7 nodes (0%) are attached to their parents as `acl:relcl`.

4 instances of `acl:relcl` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.57142857142857.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="sa_ufal-pos-DET.html">DET</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl:relcl	color:blue
1	किम्	किम्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj:pass	_	LId=क-१|Translit=kim|LTranslit=kim|Gloss=what
2	तया	तद्	DET	_	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	det	_	Translit=tayā|LTranslit=tad|Gloss=with-this
3	क्रियते	कृ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=कृ-१|Translit=kriyate|LTranslit=kr̥|Gloss=done
4	धेन्वा	धेनु	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	3	obl	_	Translit=dhenvā|LTranslit=dhenu|Gloss=with-cow
5	या	यद्	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	10	nsubj	_	Translit=yā|LTranslit=yad|Gloss=which
6	न	न	PART	_	Polarity=Neg	10	advmod	_	Translit=na|LTranslit=na|Gloss=not
7	सूते	सू	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	10	obj	_	Translit=sūte|LTranslit=sū|Gloss=calves
8	न	न	PART	_	Polarity=Neg	10	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	क्षीरम्	क्षीर	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	7	conj	_	Translit=kṣīram|LTranslit=kṣīra|Gloss=milk
10	ददाति	दा	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No|Translit=dadāti|LTranslit=dā|Gloss=gives
11	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 6 acl:relcl	color:blue
1	दैव	दैव	ADJ	_	Compound=Yes	2	amod	_	Translit=daiva|LTranslit=daiva|Gloss=divine
2	वशात्	वश	NOUN	_	Case=Abl|Gender=Masc|Number=Sing	3	obl	_	Translit=vaśāt|LTranslit=vaśa|Gloss=from-authority
3	उपपन्ने	उप-पद	VERB	_	Case=Loc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	Translit=upapanne|LTranslit=upa-pad|Gloss=obtained
4	सति	सत्	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	5	nsubj	_	LDeriv=स|Translit=sati|LTranslit=sat|Gloss=being-present
5	विभवे	विभव	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	6	advcl	_	Translit=vibhave|LTranslit=vibhava|Gloss=rich
6	यस्य	यद्	PRON	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	16	acl:relcl	_	Translit=yasya|LTranslit=yad|Gloss=of-which
7	न	न	PART	_	Polarity=Neg	6	advmod	_	Translit=na|LTranslit=na|Gloss=not
8	अस्ति	अस्	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	Translit=asti|LTranslit=as|Gloss=is
9	भोगः	भोग	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Translit=bhogaḥ|LTranslit=bhoga|Gloss=pleasure
10	इच्छा	इच्छा	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	Translit=icchā|LTranslit=icchā|Gloss=desire
11	न	न	PART	_	Polarity=Neg	15	advmod	_	Translit=na|LTranslit=na|Gloss=not
12	च	च	CCONJ	_	_	15	cc	_	Translit=ca|LTranslit=ca|Gloss=and
13	पर	पर	ADJ	_	Compound=Yes	14	amod	_	Translit=para|LTranslit=para|Gloss=ancient
14	लोके	लोक	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	15	obl	_	Translit=loke|LTranslit=loka|Gloss=in-world
15	समीहे	समीह्	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Mid	8	conj	_	Translit=samīhe|LTranslit=samīh|Gloss=aspires
16	स	तद्	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	17	nsubj	_	Translit=sa|LTranslit=tad|Gloss=that
17	भवति	भू	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=bhavati|LTranslit=bhū|Gloss=exists
18	धन	धन	NOUN	_	Compound=Yes	19	nmod	_	Translit=dhana|LTranslit=dhana|Gloss=riches
19	पालकः	पालक	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	17	xcomp	_	Translit=pālakaḥ|LTranslit=pālaka|Gloss=protector
20	मूर्खः	मूर्ख	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	19	conj	_	SpaceAfter=No|Translit=mūrkhaḥ|LTranslit=mūrkha|Gloss=fool
21	।	।	PUNCT	_	_	17	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	कः	किम्	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	0	root	_	Translit=kaḥ|LTranslit=kim|Gloss=which
2	अर्थः	अर्थ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj:cop	_	Translit=arthaḥ|LTranslit=artha|Gloss=purpose
3	पुत्रेण	पुत्र	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	2	nmod	_	Translit=putreṇa|LTranslit=putra|Gloss=son
4	जातेन	जन्	VERB	_	Case=Ins|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	acl	_	Translit=jātena|LTranslit=jan|Gloss=born
5	यः	यद्	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	_	Translit=yaḥ|LTranslit=yad|Gloss=who
6	न	न	PART	_	Polarity=Neg	7	advmod	_	Translit=na|LTranslit=na|Gloss=not
7	विद्वान्	विद्वस्	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	acl:relcl	_	Translit=vidvān|LTranslit=vidvas|Gloss=intelligent
8	न	न	PART	_	Polarity=Neg	9	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	भक्तिमान्	भक्तिमत्	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	Translit=bhaktimān|LTranslit=bhaktimat|Gloss=obedient
10	अस्ति	अस्	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No|LId=अस्-१|Translit=asti|LTranslit=as|Gloss=is
11	॥	॥	PUNCT	_	_	1	punct	_	Translit=:|LTranslit=:|Gloss=.

~~~


