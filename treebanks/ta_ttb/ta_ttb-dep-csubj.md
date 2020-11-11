---
layout: base
title:  'Statistics of csubj in UD_Tamil-TTB'
udver: '2'
---

## Treebank Statistics: UD_Tamil-TTB: Relations: `csubj`

This relation is universal.

11 nodes (0%) are attached to their parents as `csubj`.

11 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.36363636363636.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (5; 45% instances), <tt><a href="ta_ttb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (4; 36% instances), <tt><a href="ta_ttb-pos-PRON.html">PRON</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 csubj	color:blue
1	அவர்	அவர்	PRON	RpN-3SH--	Case=Nom|Gender=Com|Number=Sing|Person=3|Polite=Form|PronType=Prs	5	nsubj	5:nsubj	Translit=avar|LTranslit=avar
2	எந்தத்	எந்த	DET	DD-------	_	3	det	3:det	Translit=entat|LTranslit=enta
3	தேதியில்	தேதி	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	5	obl	5:obl:loc	Translit=tētiyil|LTranslit=tēti
4	இந்தியாவுக்குச்	இந்தியா	PROPN	NED-3SN--	Case=Dat|Gender=Neut|Number=Sing|Person=3	5	obl	5:obl:dat	Translit=intiyāvukkuc|LTranslit=intiyā
5	செல்கிறார்	செல்	VERB	Vr-P3SHAA	Gender=Com|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Form|Tense=Pres|VerbForm=Fin|Voice=Act	9	csubj	9:csubj	Translit=celkirār|LTranslit=cel
6	என்பது	என்	PART	TzNF3SN-A	Case=Nom|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Ger	5	mark	5:mark	Translit=enpatu|LTranslit=en
7	இதுவரை	இதுவரை	ADV	AA-------	_	9	advmod	9:advmod	Translit=ituvarai|LTranslit=ituvarai
8	உறுதி	உறுதி	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	9	obj	9:obj	Translit=uruti|LTranslit=uruti
9	செய்யப்படவ்	செய்	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	0	root	0:root	Translit=ceyyappaṭav|LTranslit=cey
10	இல்லை	இல்	AUX	VR-T3PNAA	Gender=Neut|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|VerbForm=Fin|Voice=Act	9	aux	9:aux	Translit=illai|LTranslit=il
11	.	.	PUNCT	Z#-------	PunctType=Peri	9	punct	9:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 13 csubj	color:blue
1	குரல்	குரல்	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	2	nmod	2:nmod:nom	Translit=kural|LTranslit=kural
2	வாக்கெடுப்பு	வாக்கெடுப்பு	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	7	obl	7:obl:மூலம்:nom	Translit=vākkeṭuppu|LTranslit=vākkeṭuppu
3	மூலம்	மூலம்	ADP	PP-------	AdpType=Post	2	case	2:case	Translit=mūlam|LTranslit=mūlam
4	ஒரு	ஒரு	ADJ	JJ-------	_	5	amod	5:amod	Translit=oru|LTranslit=oru
5	வாக்கு	வாக்கு	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	7	obj	7:obj	Translit=vākku|LTranslit=vākku
6	கூடுதலாக	கூடுதல்	ADV	AA-------	_	7	advmod	7:advmod	Translit=kūṭutalāka|LTranslit=kūṭutal
7	பெற்று	பெறு	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	10	advcl	10:advcl	Translit=perru|LTranslit=peru
8	எடியூரப்பா	எடியூரப்பா	PROPN	NEN-3SH--	Case=Nom|Gender=Com|Number=Sing|Person=3|Polite=Form	9	nmod	9:nmod:nom	Translit=eṭiyūrappā|LTranslit=eṭiyūrappā
9	அரசு	அரசு	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	10	nsubj	10:nsubj	Translit=aracu|LTranslit=aracu
10	வெற்றி	வெற்றி	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	13	obj	13:obj	Translit=verri|LTranslit=verri
11	பெற்றுவிட்டத்	பெறு	AUX	VZND3SNAA	Case=Nom|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Ger|Voice=Act	10	acl	10:acl	Translit=perruviṭṭat|LTranslit=peru
12	ஆக	ஆக	PART	Tg-------	_	10	mark	10:mark	Translit=āka|LTranslit=āka
13	அறிவித்தது	அறிவி	VERB	VzND3SNAA	Case=Nom|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Ger|Voice=Act	17	csubj	17:csubj	Translit=arivittatu|LTranslit=arivi
14	சட்ட	சட்டம்	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	15	nmod	15:nmod	Translit=caṭṭa|LTranslit=caṭṭam
15	விரோதம்	விரோதம்	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	16	nmod	16:nmod:nom	Translit=virōtam|LTranslit=virōtam
16	ஆன	ஆன	PART	Tg-------	_	17	nmod	17:nmod	Translit=āna|LTranslit=āna
17	செயல்	செயல்	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	0	root	0:root	SpaceAfter=No|Translit=ceyal|LTranslit=ceyal
18	.	.	PUNCT	Z#-------	PunctType=Peri	17	punct	17:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 csubj	color:blue
1	2022-ம்	2022	NUM	Uy-------	NumType=Ord	2	nummod	2:nummod	Translit=2022-m|LTranslit=2022
2	ஆண்டில்	ஆண்டு	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	9	obl	9:obl:loc	Translit=āṇṭil|LTranslit=āṇṭu
3	gஎர்மனியில்	gஎர்மனி	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	9	obl	9:obl:loc	Translit=germaniyil|LTranslit=germani
4	அணுஉலைக்	அணுஉலை	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	5	nmod	5:nmod:nom	Translit=aṇuulaik|LTranslit=aṇuulai
5	கூடங்கள்	கூடம்	NOUN	NNN-3PN--	Case=Nom|Gender=Neut|Number=Plur|Person=3	8	nmod	8:nmod:இல்:nom	Translit=kūṭaṅkaḷ|LTranslit=kūṭam
6	ஏ	ஏ	PART	Tq-------	_	5	advmod:emph	5:advmod:emph	Translit=ē|LTranslit=ē
7	இல்லாத	இல்	ADP	PP-------	AdpType=Post	5	case	5:case	Translit=illāta|LTranslit=il
8	நிலை	நிலை	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	9	obj	9:obj	Translit=nilai|LTranslit=nilai
9	ஏற்பட	ஏற்படு	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	13	csubj	13:csubj	Translit=ērpaṭa|LTranslit=ērpaṭu
10	வேண்டும்	வேண்டு	AUX	VR-F3SNAA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux	9:aux	Translit=vēṇṭum|LTranslit=vēṇṭu
11	என்பது	என்	X	TQ-------	_	9	mark	9:mark	Translit=enpatu|LTranslit=en
12	தான்	தான்	PART	Tq-------	_	9	advmod:emph	9:advmod:emph	Translit=tān|LTranslit=tān
13	அது	அது	PRON	RpN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	0:root	SpaceAfter=No|Translit=atu|LTranslit=atu
14	.	.	PUNCT	Z#-------	PunctType=Peri	13	punct	13:punct	Translit=.|LTranslit=.

~~~


