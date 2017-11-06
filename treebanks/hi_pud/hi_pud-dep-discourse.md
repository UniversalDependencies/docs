---
layout: base
title:  'Statistics of discourse in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `discourse`

This relation is universal.

167 nodes (1%) are attached to their parents as `discourse`.

144 instances of `discourse` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89820359281437.

The following 14 pairs of parts of speech are connected with `discourse`: <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (66; 40% instances), <tt><a href="hi_pud-pos-DET.html">DET</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (26; 16% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (19; 11% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (16; 10% instances), <tt><a href="hi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (7; 4% instances), <tt><a href="hi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (7; 4% instances), <tt><a href="hi_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (7; 4% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (6; 4% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-SYM.html">SYM</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-PART.html">PART</a></tt>-<tt><a href="hi_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 discourse	color:blue
1	लीव	_	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	nsubj	_	Translit=līva
2	ने	_	ADP	IN	Case=Erg	1	case	_	Translit=ne
3	कहा	_	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	Translit=kahā
4	कि	_	SCONJ	IN	_	11	mark	_	Translit=ki
5	उसकी	_	PRON	PRP$	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nmod:poss	_	Translit=usakī
6	आवाज	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	Translit=āvāja
7	सचमुच	_	ADV	RB	_	11	advmod	_	Translit=sacamuca
8	दुनिया	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	obl	_	Translit=duniyā
9	भर	_	PART	PRT	_	8	discourse	_	Translit=bhara
10	में	_	ADP	IN	Case=Loc	8	case	_	Translit=meṁ
11	फैल	_	VERB	VB	_	3	ccomp	_	Translit=phaila
12	गयी	_	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3	11	aux	_	SpaceAfter=No|Translit=gayī
13	।	_	PUNCT	.	_	3	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	मैं	_	PRON	PRP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=1	5	nsubj	_	Translit=maiṁ
2	किसी	_	DET	DTI	_	4	det	_	Translit=kisī
3	भी	_	PART	EMPH	_	2	discourse	_	Translit=bhī
4	तरह	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	advmod	_	Translit=taraha
5	जेल	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	Translit=jela
6	जा	_	AUX	VB	_	5	aux	_	Translit=jā
7	रहा	_	AUX	VXH	Aspect=Prog|Gender=Masc|Mood=Ind|Number=Sing|Person=3	5	aux	_	Translit=rahā
8	हूं	_	AUX	VXH	Gender=Masc|Number=Sing|Person=1|Tense=Pres	5	aux	_	SpaceAfter=No|Translit=hūṁ
9	,	_	PUNCT	,	_	13	punct	_	Translit=,
10	शायद	_	ADV	RB	_	13	advmod	_	Translit=śāyada
11	यह	_	PRON	PRP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Bug=aux-child|Translit=yaha
12	इसी	_	DET	DT	Definite=Def|Number=Sing	13	det	_	Bug=aux-child|Translit=isī
13	लायक	_	ADJ	JJ	_	5	aux	_	Translit=lāyaka
14	था	_	AUX	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	13	cop	_	Bug=aux-child|SpaceAfter=No|Translit=thā
15	।	_	PUNCT	.	_	5	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 discourse	color:blue
1	रूस	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	nmod:poss	_	Translit=rūsa
2	की	_	ADP	IN	Case=Gen|Gender=Fem	1	case	_	Translit=kī
3	कैथरिन	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	Translit=kaitharina
4	भी	_	PART	EMPH	_	3	discourse	_	Translit=bhī
5	बहुत	_	DET	QF	_	6	advmod	_	Translit=bahuta
6	संतुष्ट	_	ADJ	JJ	_	0	root	_	Translit=saṁtuṣṭa
7	थी	_	AUX	VBI	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	SpaceAfter=No|Translit=thī
8	।	_	PUNCT	.	_	6	punct	_	Translit=.

~~~


