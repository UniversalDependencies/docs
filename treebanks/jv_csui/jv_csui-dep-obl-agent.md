---
layout: base
title:  'Statistics of obl:agent in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="jv_csui-dep-obl-tmod.html">obl:tmod</a></tt>.

29 nodes (0%) are attached to their parents as `obl:agent`.

26 instances of `obl:agent` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13793103448276.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (14; 48% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (13; 45% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:agent	color:blue
1	Lintang	lintang	PROPN	_	_	4	nsubj:pass	_	_
2	jebul	jebul	ADV	_	_	4	advmod	_	_
3	arep	arep	AUX	_	Polite=Infm	4	aux	_	_
4	dirabi	rabi	VERB	_	Polite=Infm|Voice=Pass	0	root	_	_
5	Ryan	ryan	PROPN	_	_	4	obl:agent	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:agent	color:blue
1	Iki	iki	PRON	_	Polite=Infm|PronType=Dem	2	nsubj	_	_
2	wujud	wujud	NOUN	_	Number=Sing	0	root	_	_
3	jinis	jinis	NOUN	_	Number=Sing	2	nmod	_	_
4	kanker	kanker	NOUN	_	Number=Sing	3	nmod	_	_
5	paling	paling	ADV	_	_	6	advmod	_	_
6	umum	umum	ADJ	_	_	3	amod	_	_
7	kang	kang	PRON	_	Polite=Infm|PronType=Rel	8	nsubj:pass	_	_
8	ditandhang	tandhang	VERB	_	Voice=Pass	6	advcl	_	_
9	kaum	kaum	NOUN	_	Number=Sing	8	obl:agent	_	_
10	wanita	wanita	NOUN	_	Number=Sing	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Mbok	mbok	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	3	obl:agent	_	_
2	aku	aku	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	3	nsubj:pass	_	_
3	ditepangne	tepang	VERB	_	Voice=Act	0	root	_	SpaceAfter=No
4	?	?	PUNCT	_	_	3	punct	_	_

~~~


