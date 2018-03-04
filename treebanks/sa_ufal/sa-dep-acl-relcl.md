---
layout: base
title:  'Statistics of acl:relcl in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sa-dep-acl.html">acl</a></tt>.

4 nodes (0%) are attached to their parents as `acl:relcl`.

3 instances of `acl:relcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	किम्	किम्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj:pass	_	LId=क-१|Translit=kim|LTranslit=kim|Gloss=what
2	तया	तद्	DET	_	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	det	_	Translit=tayā|LTranslit=tad|Gloss=with-this
3	क्रियते	कृ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=कृ-१|Translit=kriyate|LTranslit=kr̥|Gloss=done
4	धेन्वा	धेनु	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	3	obl	_	Translit=dhenvā|LTranslit=dhenu|Gloss=with-cow
5	या	यद्	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	7	nsubj	_	Translit=yā|LTranslit=yad|Gloss=which
6	न	न	PART	_	Polarity=Neg	7	advmod	_	Translit=na|LTranslit=na|Gloss=not
7	सूते	सू	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	4	acl:relcl	_	Translit=sūte|LTranslit=sū|Gloss=calves
8	न	न	PART	_	Polarity=Neg	10	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	क्षीरम्	क्षीर	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	obj	_	Translit=kṣīram|LTranslit=kṣīra|Gloss=milk
10	ददाति	दा	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No|Translit=dadāti|LTranslit=dā|Gloss=gives
11	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	कः	किम्	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	0	root	_	Translit=kaḥ|LTranslit=kim|Gloss=which
2	अर्थः	अर्थ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj:cop	_	Translit=arthaḥ|LTranslit=artha|Gloss=purpose
3	पुत्रेण	पुत्र	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	2	nmod	_	Translit=putreṇa|LTranslit=putra|Gloss=son
4	जातेन	जात	ADJ	_	Case=Ins|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	amod	_	Translit=jātena|LTranslit=jāta|Gloss=born
5	यः	यद्	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	_	Translit=yaḥ|LTranslit=yad|Gloss=who
6	न	न	PART	_	Polarity=Neg	7	advmod	_	Translit=na|LTranslit=na|Gloss=not
7	विद्वान्	विद्वस्	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	acl:relcl	_	Translit=vidvān|LTranslit=vidvas|Gloss=intelligent
8	न	न	PART	_	Polarity=Neg	9	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	भक्तिमान्	भक्तिमत्	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	Translit=bhaktimān|LTranslit=bhaktimat|Gloss=obedient
10	अस्ति	अस्	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No|LId=अस्-१|Translit=asti|LTranslit=as|Gloss=is
11	॥	॥	PUNCT	_	_	1	punct	_	Translit=:|LTranslit=:|Gloss=.

~~~


