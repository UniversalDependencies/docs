---
layout: base
title:  'Statistics of aux in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="hy_armtdp-dep-aux-caus.html">aux:caus</a></tt>.

4717 nodes (5%) are attached to their parents as `aux`.

2834 instances of `aux` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11469154123383.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (4633; 98% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (50; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (29; 1% instances), <tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Էջմիածնի	Էջմիածին	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	2	nmod:poss	_	Translit=Ēǰmiaçni|LTranslit=Ēǰmiaçin
2	մասնակցությունն	մասնակցություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	7	nsubj	_	Translit=masnakc’owt’yownn|LTranslit=masnakc’owt’yown
3	էլ	էլ	ADV	_	_	2	advmod:emph	_	Translit=ēl|LTranslit=ēl
4	ձևական	ձևական	ADJ	_	_	5	amod	_	Translit=jewakan|LTranslit=jewakan
5	բնույթ	բնույթ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	compound:lvc	_	Translit=bnowyt’|LTranslit=bnowyt’
6	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	aux	_	Translit=ēr|LTranslit=em
7	կրում	կրել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=krowm|LTranslit=krel|SpaceAfter=No
8	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Հաճելի	հաճելի	ADJ	_	Degree=Pos	0	root	_	Translit=Hač̣eli|LTranslit=hač̣eli
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Translit=ē|LTranslit=em
3	երազել	երազել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	Translit=erazel|LTranslit=erazel|SpaceAfter=No
4	՝	՝	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	Երևան	Երևան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	3	parataxis	_	Translit=Erewan|LTranslit=Erewan|SpaceAfter=No
6	—	—	PUNCT	_	_	7	punct	_	Translit=—|LTranslit=—|SpaceAfter=No
7	Ջերմուկ	Ջերմուկ	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	5	flat:range	_	Translit=J̌ermowk|LTranslit=J̌ermowk|SpaceAfter=No
8	...	...	PUNCT	_	_	1	punct	_	Translit=...|LTranslit=...

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Կարդում	կարդալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=Kardowm|LTranslit=kardal
2	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=enk’|LTranslit=em
3	բոլոր	բոլոր	DET	_	PronType=Tot	4	det	_	Translit=bolor|LTranslit=bolor
4	լուրերը	լուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	1	obj	_	Translit=lowrerë|LTranslit=lowr|SpaceAfter=No
5	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


