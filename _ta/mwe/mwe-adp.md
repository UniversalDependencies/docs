## ADP Segmentation

Tamil has several postpositional or adpositional elements that may attach to a noun, pronoun, or case-marked form. In UD annotation, these elements may need to be segmented when they function as independent relational words.

However, ADP segmentation should not be applied mechanically. Some forms may behave as postpositions in one context, nouns in another context, and parts of lexicalised expressions elsewhere. Therefore, each case should be analysed carefully based on its syntactic function in the sentence.

### Candidate ADP Forms

| Tamil form | Transliteration | General meaning | Possible UPOS |
|---|---|---|---|
| வரை | varai | until, up to | ADP |
| மீது | mītu | on, over | ADP |
| பக்கம் | pakkam | side, towards, near | ADP / NOUN |
| அருகில் | arukil | near, beside | ADP / NOUN |
| அடுத்து | aṭuttu | next to, after | ADP / ADV |
| குறித்து | kuṟittu | about, concerning | ADP / VERB |
| சார்பில் | cārpil | on behalf of | ADP / NOUN |
| இடையில் | iṭaiyil | between, among | ADP / NOUN |
| போல | pōla | like, as | ADP / SCONJ |
| விட | viṭa | than, compared to | ADP / SCONJ / VERB |
| விட்டு | viṭṭu | leaving, from, after | ADP / VERB |
| தவிர | tavira | except, apart from | ADP / SCONJ |
| முன்னால் | muṉṉāl | in front of, before | ADP / NOUN / ADV |
| அப்பால் | appāl | beyond | ADP / ADV / NOUN |
| பிறகு | piṟaku | after | ADP / ADV / NOUN |
| முதல் | mutal | from, since, first | ADP / NUM / ADJ / NOUN |
| கீழ் | kīḻ | under, below | ADP / NOUN / ADV |

### General Guideline

When these forms are attached orthographically to a host word, they may be segmented if they function as separate adpositional elements.
The segmented ADP may usually receive the UPOS tag `ADP`, and its dependency relation may often be `case`, depending on the UD analysis.

Example:

```text
அவன்போல     பேசினான்.
அவன் போல    பேசினான் .
he   like    speak-PST-3SG.M



அவனுக்குப்பிறகு    பேசினான்
அவனுக்குப் ப ிறகு   பேசினான்.
he-DAT   after  spoke-3SG.M
‘He spoke after him.’

```

### Important Note

These forms should be analysed carefully because their UPOS is context-dependent. For example, **முதல்** may function as an adposition meaning “from”, but it may also function as an ordinal or nominal element meaning “first”. Similarly, **பக்கம்**, **அருகில்**, **இடையில்** may retain nominal or locative meanings in some contexts.
