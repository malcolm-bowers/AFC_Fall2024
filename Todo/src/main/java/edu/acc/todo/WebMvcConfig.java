package edu.acc.todo;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.http.CacheControl;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.resource.ResourceResolverChain;

import java.util.List;

import static java.util.concurrent.TimeUnit.DAYS;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    private final WebProperties.Resources resourceProperties;

    public WebMvcConfig(WebProperties webProperties) {
        this.resourceProperties = webProperties.getResources();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/assets/**")
                .addResourceLocations("classpath:static/assets/")
                .setCacheControl(CacheControl.maxAge(1, DAYS))
                .addResourceLocations(resourceProperties.getStaticLocations())
                .resourceChain(true);

        registry
                .addResourceHandler("/**")
                .addResourceLocations(resourceProperties.getStaticLocations())
                .resourceChain(false)
                .addResolver(getResourceResolver());
    }

    private PathResourceResolver getResourceResolver() {
        return new PathResourceResolver() {
            @Override
            public Resource resolveResource(HttpServletRequest request,
                                            @NonNull String requestPath,
                                            @NonNull List<? extends Resource> locations,
                                            @NonNull ResourceResolverChain chain) {

                Resource requestedResource = super.resolveResource(request, requestPath, locations, chain);
                return requestedResource != null
                        ? requestedResource
                        : super.resolveResource(request, "/index.html", locations, chain);
            }
        };
    }

}
