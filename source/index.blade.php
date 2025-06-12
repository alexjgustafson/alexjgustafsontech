@extends('_layouts.master')

@section('body')
<section class="container max-w-6xl mx-auto px-6 py-10 md:py-12">
    <div class="flex flex-col-reverse mb-10 lg:flex-row lg:mb-24">
        <div class="mt-8">
            <h1 id="intro-docs-template">{{ $page->siteName }}</h1>

            <h2 id="intro-powered-by-jigsaw" class="font-light mt-4">{{ $page->siteDescription }}</h2>

            <p class="text-lg">PHP developer with a decade of experience in WordPress, Laravel, and more.</p>

            <div class="flex my-10">
                <a href="#contact" title="Contact Alex" class="bg-blue-500 hover:bg-blue-600 font-normal text-white hover:text-white rounded mr-4 py-2 px-6">Contact</a>

{{--                <a href="#testimonials" title="Testimonials" class="bg-gray-300 hover:bg-gray-600 text-blue-900 font-normal hover:text-white rounded py-2 px-6">Testimonials</a>--}}
            </div>
        </div>

        <img src="/assets/img/alex-logo.png" alt="{{ $page->siteName }} large logo" class="mx-auto mb-6 lg:mb-0 ">
    </div>

    <hr class="block my-8 border lg:hidden">

    <h2 id="testimonials">Testimonials</h2>
    <div class="md:flex -mx-2 -mx-4">
        <div class="mb-8 mx-3 px-2 md:w-1/3">
            <img src="/assets/img/brilliant.svg" class="h-20 w-20" alt="brilliant icon">

            <h3 id="intro-laravel" class="text-2xl text-blue-900 mb-0">"Alex is brilliant!"</h3>

            <blockquote>"Alex is brilliant! He managed to cut down a time-consuming project into a quick website, and was delightful to work with all along the way. I will be working with Alex again and encourage you to, as well! He really knows his stuff and finishes projects with high quality and a 360-degree view on the outcome."
            </blockquote>
            <cite>Laser Malena-Webber, Doubleclicks Records</cite>
        </div>

        <div class="mb-8 mx-3 px-2 md:w-1/3">
            <img src="/assets/img/exact.svg" class="mt-4 h-12 w-12" alt="exact icon">

            <h3 id="intro-markdown" class="pt-4 text-2xl text-blue-900 mb-0">"Exactly What We Needed"</h3>

            <blockquote>It's a pleasure working with Alex. His front end development expertise on a short timeline was exactly what we needed [...] A professional through the whole process.</blockquote>
            <cite>Brad Cummings, Founder & CEO of Equilottery Games</cite>
        </div>

        <div class="mx-3 px-2 md:w-1/3">
            <img src="/assets/img/team.svg" class="mt-4 h-12 w-12" alt="team icon">

            <h3 id="intro-mix" class="pt-4 text-2xl text-blue-900 mb-0">"A Valuable Contributor"</h3>

            <blockquote>I am happy to give an enthusiastic recommendation for Alex’s work. His knowledge, experience, and attitude make him a valuable contributor through all phases of a development project, from planning and strategy through execution. On top of his strong work, his communication skills help keep the project moving smoothly and everyone up-to-date.</blockquote>
            <cite>Jon Reigelman, Creative Director at National Center for Families Learning</cite>
        </div>
    </div>
</section>
@endsection
