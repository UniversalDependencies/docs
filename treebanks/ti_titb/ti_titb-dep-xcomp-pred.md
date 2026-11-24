---
layout: base
title:  'Statistics of xcomp:pred in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="ti_titb-dep-xcomp.html">xcomp</a></tt>.

21 nodes (1%) are attached to their parents as `xcomp:pred`.

21 instances of `xcomp:pred` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57142857142857.

The following 8 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-ADJ.html">ADJ</a></tt> (4; 19% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (4; 19% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-ADJ.html">ADJ</a></tt> (3; 14% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-DET.html">DET</a></tt> (2; 10% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp:pred	color:blue
1	ሃብታማት	ሃብታም	ADJ	ADJ	Number=Plur	2	xcomp:pred	_	Translit=habtamat
2	ምዃን	ምዃን	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	4	csubj	_	_
3	ኦም	ኦም	DET	DET	Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
4	ኣገሪሙና	ኣግረመ	VERB	VERB	Aspect=Perf|Gender=Masc|Number=Sing|Number[obj]=Plur|Person=3|Person[obj]=1|Voice=Cau	0	root	_	Translit=ʔagərimuna
5	።	።	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 xcomp:pred	color:blue
1	ዝ	ዝ	SCONJ	SCONJ	_	2	mark	_	_
2	ኣስተውዓልኩዎ	ኣስተውዓለ	VERB	VSTEM	Aspect=Perf|Gender[obj]=Masc|Number=Sing|Number[obj]=Sing|Person=1|Person[obj]=3|Voice=Cau	11	csubj:outer	_	Aimad=ASRAHI
3	፡	፡	PUNCT	PUNCT	_	2	punct	_	_
4	እቲ	እቲ	DET	DET	Gender=Masc|Number=Sing|PronType=Art	5	det	_	Translit=ʔti
5	ጸገም	ጸገም	NOUN	NOUN	Number=Sing	11	nsubj:outer	_	Translit=s'əgəm
6	ኣስቴር	ኣስቴር	PROPN	PROPN	Gender=Fem|Number=Sing	11	nsubj	_	Translit=ʔaster
7	ኣብ	ኣብ	ADP	ADP	_	9	case	_	Translit=ʔab
8	ቀረባ	ቀረባ	NOUN	NOUN	Number=Sing	9	nmod	_	Translit=k'ərəba
9	ጊዜ	ጊዜ	NOUN	NOUN	Number=Sing	10	obl	_	Translit=gize
10	ትኸይድ	ከደ	VERB	VERB	Aspect=Imp|Gender=Fem|Number=Sing|Person=3	11	xcomp:pred	_	Translit=txəyd
11	ምዃን	ምዃን	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	0	root	_	_
12	ኣ	ኣ	DET	DET	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	det:poss	_	_
13	እዩ	እዩ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	11	cop	_	Translit=ʔyu
14	።	።	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 xcomp:pred	color:blue
1	ዝ	ዝ	SCONJ	SCONJ	_	2	mark	_	_
2	ኣስተውዓልኩዎ	ኣስተውዓለ	VERB	VSTEM	Aspect=Perf|Gender[obj]=Masc|Number=Sing|Number[obj]=Sing|Person=1|Person[obj]=3|Voice=Cau	10	csubj:outer	_	Aimad=ASRAHI
3	፡	፡	PUNCT	PUNCT	_	2	punct	_	_
4	ጸገም	ጸገም	NOUN	NOUN	Number=Sing	10	nsubj	_	Translit=s'əgəm
5	ኣስቴር	ኣስቴር	PROPN	PROPN	Gender=Fem|Number=Sing	4	nmod	_	Translit=ʔaster
6	ውላድ	ውላድ	NOUN	NOUN	Number=Sing	8	obj	_	_
7	ኣ	ኣ	DET	DET	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
8	ምሕባእ	ምሕባእ	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	10	xcomp:pred	_	_
9	ኣ	ኣ	DET	DET	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	det:poss	_	_
10	ምዃን	ምዃን	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	0	root	_	_
11	ኡ	ኡ	DET	DET	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	det:poss	_	_
12	እዩ	እዩ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	10	cop	_	Translit=ʔyu
13	።	።	PUNCT	PUNCT	_	10	punct	_	_

~~~


