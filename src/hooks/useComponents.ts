import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { ComponentTypes } from "../models/components"
import ComponentsApi from "../api/componentsApi"

export const useComponent = (name: ComponentTypes, componentId: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["components", componentId],
        queryFn: () => ComponentsApi.getSingle(name, componentId),
    })

    return { data, isLoading }
}

export const useComponents = (name: ComponentTypes, queryParams: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["components", name, queryParams],
        queryFn: () => ComponentsApi.getAll(name, queryParams),
    })

    return { data, isLoading }
}

export const useComponentsCreate = (name: ComponentTypes) => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: (payload: unknown) => ComponentsApi.postSingle(name, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["components"] })
        },
    })

    return { mutateAsync }
}

export const useComponentsEdit = (componentId: string) => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: (payload: unknown) => ComponentsApi.putSingle(componentId, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["components"] })
        },
    })

    return { mutateAsync }
}

export const useComponentsDelete = (componentId: string) => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: () => ComponentsApi.deleteSingle(componentId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["components"] })
        },
    })

    return { mutateAsync }
}
