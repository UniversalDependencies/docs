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
1	Lintang	_	PROPN	_	_	4	nsubj:pass	_	_
2	jebul	_	ADV	_	_	4	advmod	_	_
3	arep	_	AUX	_	Polite=Infm	4	aux	_	_
4	dirabi	_	VERB	_	Mood=Ind|Polite=Infm|Voice=Pass	0	root	_	_
5	Ryan	_	PROPN	_	_	4	obl:agent	_	SpaceAfter=No
6	.	_	PUNCT	_	_	4	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:agent	color:blue
1	Iki	_	PRON	_	Polite=Infm|PronType=Dem	2	nsubj	_	_
2	wujud	_	NOUN	_	Number=Sing	0	root	_	_
3	jinis	_	NOUN	_	Number=Sing	2	nmod	_	_
4	kanker	_	NOUN	_	Number=Sing	3	nmod	_	_
5	paling	_	ADV	_	_	6	advmod	_	_
6	umum	_	ADJ	_	_	3	amod	_	_
7	kang	_	PRON	_	Polite=Infm|PronType=Rel	8	nsubj:pass	_	_
8	ditandhang	_	VERB	_	Mood=Ind|Voice=Pass	6	advcl	_	_
9	kaum	_	NOUN	_	Number=Sing	8	obl:agent	_	_
10	wanita	_	NOUN	_	Number=Sing	9	nmod	_	SpaceAfter=No
11	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Mbok	_	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	3	obl:agent	_	_
2	aku	_	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	3	nsubj:pass	_	_
3	ditepangne	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No
4	?	_	PUNCT	_	_	3	punct	_	_

~~~


