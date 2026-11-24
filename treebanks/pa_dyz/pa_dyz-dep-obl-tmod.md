---
layout: base
title:  'Statistics of obl:tmod in UD_Punjabi-DYZ'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-DYZ: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="pa_dyz-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="pa_dyz-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pa_dyz-dep-obl-arg.html">obl:arg</a></tt>.

28 nodes (1%) are attached to their parents as `obl:tmod`.

28 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.28571428571429.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="pa_dyz-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_dyz-pos-NOUN.html">NOUN</a></tt> (22; 79% instances), <tt><a href="pa_dyz-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_dyz-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="pa_dyz-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_dyz-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="pa_dyz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_dyz-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="pa_dyz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_dyz-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="pa_dyz-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_dyz-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 obl:tmod	color:blue
1	ਚਿੱਠੀ	ਚਿੱਠੀ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	obj	_	Gloss=letter|Translit=Ciṭṭhī
2	ਮਿਲਣ	ਮਿਲਣਾ	VERB	_	Case=Acc|VerbForm=Inf	12	advcl	_	Gloss=receive|Translit=milaṇ
3	ਤੋਂ	ਤੋਂ	ADP	_	Case=Abl	2	case	_	Gloss=INF|Translit=tōṅ
4	ਇਕ	ਇੱਕ	DET	_	PronType=Ind	5	det	_	Gloss=from|Translit=ik
5	ਘੰਟਾ	ਘੰਟਾ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	obl:tmod	_	Gloss=one|Translit=ghaṇṭā
6	ਮਗਰੋਂ	ਮਗਰੋਂ	ADP	_	_	5	case	_	Gloss=hour|Translit=magarōṅ
7	ਉਹ	ਉਹ	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Dem	12	nsubj	_	Gloss=after|Translit=uh
8	ਪ੍ਰਾਂਤ	ਪ੍ਰਾਂਤ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	10	nmod:poss	_	Gloss=he|Translit=prāṅt
9	ਦੀ	ਦਾ	ADP	_	Gender=Fem	8	case	_	Gloss=province|Translit=dī
10	ਰਾਜਧਾਨੀ	ਰਾਜਧਾਨੀ	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	Gloss=GEN|Translit=rājadhānī
11	ਨੂੰ	ਨੂੰ	ADP	_	Case=Acc	10	case	_	Gloss=capital|Translit=nūṅ
12	ਚੱਲ	ਚੱਲਣਾ	VERB	_	_	0	root	_	Gloss=ACC|Translit=call
13	ਪਿਆ	ਪੈਣਾ	AUX	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	12	aux	_	Gloss=go|Translit=pi'ā
14	।	।	PUNCT	_	_	12	punct	_	Gloss=start.PFV

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 obl:tmod	color:blue
1	(ਮੈਨੂੰ	ਮੈਂ	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obl:arg	_	Gloss=me|Translit="(Mainu
2	ਇਸ	ਇਹ	DET	_	PronType=Dem	4	det	_	Gloss=DAT|Translit=is
3	ਦਾ	ਦਾ	ADP	_	Gender=Masc|Number=Sing	2	case	_	Gloss=this|Translit=da
4	ਕਾਰਨ	ਕਾਰਨ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	nsubj	_	Gloss=GEN|Translit=kaaran
5	ਬਾਅਦ	ਬਾਅਦ	ADV	_	_	8	obl	_	Gloss=reason|Translit=baad
6	'ਚ	ਵਿੱਚ	ADP	_	_	5	case	_	Gloss=afterwards|Translit='ch
7	ਸਮਝ	ਸਮਝ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	compound:lvc	_	Gloss=in|Translit=samajh
8	ਆਇਆ	ਆਉਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=understand|Translit=aaya
9	ਸੀ	ਸੀ	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	aux	_	Gloss=come.PFV|Translit=,si
10	,	,	PUNCT	_	_	8	punct	_	Gloss=,be.PST|Translit=par
11	ਪਰ	ਪਰ	CCONJ	_	_	17	cc	_	Gloss=but|Translit=kaash!
12	ਕਾਸ਼	ਕਾਸ਼	PART	_	_	17	discourse	_	Gloss=alas|Translit=Udon
13	!	!	PUNCT	_	_	12	punct	_	Gloss=then|Translit=bahut
14	ਉਦੋਂ	ਉਦੋਂ	ADV	_	_	17	obl:tmod	_	Gloss=very|Translit=der
15	ਬਹੁਤ	ਬਹੁਤ	ADV	_	_	16	advmod	_	Gloss=late|Translit=ho
16	ਦੇਰ	ਦੇਰ	NOUN	_	Gender=Fem|Number=Sing	17	xcomp	_	Gloss=happen.PFV|Translit=chukki
17	ਹੋ	ਹੋਣਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	conj	_	Gloss=complete|Translit=si)
18	ਚੁੱਕੀ	ਚੁੱਕਣਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	17	compound:svc	_	Gloss=be.PST
19	ਸੀ)	ਸੀ	AUX	_	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	17	aux	_	_
20	।	।	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 obl:tmod	color:blue
1	ਉਨੱਤੀ	ਉਨੱਤੀ	NUM	_	_	9	obl:tmod	_	Gloss=twenty-nine|Translit=Unatti
2	ਨੂੰ	ਨੂੰ	ADP	_	Case=Acc	1	case	_	Gloss=LOC|Translit=nu
3	ਮਿਸਿਜ਼	ਮਿਸਿਜ਼	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	8	nmod:poss	_	Gloss=Mrs.|Translit=Mrs.
4	ਵੈਨ	ਵੈਨ	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	3	flat	_	Gloss=van|Translit=van
5	ਦਾਨ	ਦਾਨ	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	3	flat	_	Gloss=Daan|Translit=Daan
6	ਦਾ	ਦਾ	ADP	_	Gender=Masc|Number=Sing	3	case	_	Gloss=GEN|Translit=da
7	ਜਨਮ	ਜਨਮ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	compound	_	Gloss=birthday|Translit=janam
8	ਦਿਨ	ਦਿਨ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	Gloss=COP.PST.3SG|Translit=din
9	ਸੀ	ਸੀ	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Translit=si
10	।	।	PUNCT	_	_	9	punct	_	_

~~~


