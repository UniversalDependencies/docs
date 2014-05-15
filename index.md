---
layout: base
title:  'Universal Dependencies'
---

# Universal Dependencies

This is the online documentation and example bank for Universal
Dependencies.

* English relations: [index](en-index.html), [all](en-all.html) (merged)
* Finnish relations: [index](fi-index.html), [all](fi-all.html) (merged)
* Universal Dependencies: [index](usd-index.html), [all](usd-all.html) (merged)

## Introduction

This online repository contains dependency annotation documentation
and visualizations, built using a combination of Jekyll, GitHub pages
and embedded brat visualizations. Here's a minimal example:

<div class="example">

An adjectival complement of a verb is an adjectival phrase which functions as the complement (like an object of the verb).

<div class="sd-parse">
She looks very beautiful
acomp(looks, beautiful)
</div>

</div>

The text is Markdown (with optional inline HTML) and the data for the
visualizations is represented in either the Stanford Dependency or
CoNLL-X format. For example, the above visualization is generated from
this input:

    <div class="sd-parse">
    She looks very beautiful
    acomp(looks, beautiful)
    </div>

See the [links below](#more-information) for more information.

## How to contribute

See [here](contributing.html) for instructions on how to contribute to
this online documentation. [This page](embedsd.html) provides details
on how the visualized examples are created.

## More information:

The following sources of documentation provide further details:

- [Markdown](http://daringfireball.net/projects/markdown/syntax)
- [Github pages](https://pages.github.com/)
- [Embedded brat](http://brat.nlplab.org/embed.html)
- [Stanford Dependencies](http://nlp.stanford.edu/software/stanford-dependencies.shtml)
